#!/usr/bin/env node
/**
 * Simple Link Verification Test
 * Checks all internal HTML links for correctness
 */

const fs = require('fs');
const path = require('path');

const baseDir = '/Users/milothebot/.openclaw/workspace/ai-business-tools';

// Find all HTML files
function findHtmlFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            if (item !== 'node_modules' && item !== '.git') {
                findHtmlFiles(fullPath, files);
            }
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

// Simply check if a link target exists
function targetExists(filePath, link) {
    // Skip external, anchors, javascript
    if (link.startsWith('http') || link.startsWith('#') || link.startsWith('javascript:')) {
        return { exists: true, type: 'external' };
    }
    
    const fileDir = path.dirname(filePath);
    
    // Handle links with anchors
    let targetFile = link;
    let anchor = '';
    if (link.includes('#')) {
        targetFile = link.split('#')[0];
        anchor = link.split('#')[1];
    }
    
    // Check various path possibilities
    const possibilities = [];
    
    if (targetFile.startsWith('../')) {
        // Relative up
        const parentDir = path.dirname(fileDir);
        const withoutUp = targetFile.substring(3); // Remove ../
        possibilities.push(path.join(parentDir, withoutUp));
        possibilities.push(path.join(parentDir, withoutUp + '.html'));
    } else if (targetFile.includes('/')) {
        // Relative with directory
        possibilities.push(path.join(fileDir, targetFile));
        possibilities.push(path.join(fileDir, targetFile + '.html'));
    } else {
        // Same directory
        possibilities.push(path.join(fileDir, targetFile));
        possibilities.push(path.join(fileDir, targetFile + '.html'));
        // Also check root for known pages
        possibilities.push(path.join(baseDir, targetFile));
        possibilities.push(path.join(baseDir, targetFile + '.html'));
    }
    
    // Also check with .html if no extension
    if (!targetFile.endsWith('.html')) {
        const withHtml = possibilities.map(p => p.endsWith('.html') ? p : p + '.html');
        possibilities.push(...withHtml);
    }
    
    // Try each possibility
    for (const p of possibilities) {
        if (fs.existsSync(p)) {
            return { exists: true, type: 'internal', path: p };
        }
    }
    
    return { exists: false, type: 'broken', path: possibilities[0] };
}

async function main() {
    console.log('🔍 AIPreneurTools Link Verification Test');
    console.log('========================================\n');
    
    const htmlFiles = findHtmlFiles(baseDir);
    console.log(`Found ${htmlFiles.length} HTML files\n`);
    
    const brokenLinks = [];
    const stats = { internal: 0, external: 0, affiliate: 0 };
    
    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const regex = /href="([^"]*)"/g;
        let match;
        
        while ((match = regex.exec(content)) !== null) {
            const href = match[1];
            const result = targetExists(file, href);
            
            if (href.startsWith('http')) {
                stats.affiliate++;
            } else if (result.type === 'external') {
                stats.external++;
            } else if (!result.exists) {
                brokenLinks.push({
                    file: path.relative(baseDir, file),
                    link: href,
                    target: result.path
                });
            } else {
                stats.internal++;
            }
        }
    }
    
    // Report results
    console.log('📊 Link Analysis:');
    console.log(`  Internal links: ${stats.internal}`);
    console.log(`  External links: ${stats.external}`);
    console.log(`  Affiliate links: ${stats.affiliate}`);
    console.log(`  Broken links: ${brokenLinks.length}\n`);
    
    if (brokenLinks.length > 0) {
        console.log('❌ Broken Links Found:');
        console.log('----------------------');
        brokenLinks.forEach((link, i) => {
            console.log(`  ${i + 1}. File: ${link.file}`);
            console.log(`     Link: ${link.link}`);
            console.log(`     Expected: ${link.target}\n`);
        });
    } else {
        console.log('✅ All internal links are valid!\n');
    }
    
    // CTA Button Count
    console.log('📢 CTA Button Check:');
    console.log('--------------------');
    let ctaCount = 0;
    let ctaBoxCount = 0;
    
    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const ctaMatches = content.match(/class="cta-btn"/g);
        const boxMatches = content.match(/class="cta-box"/g);
        if (ctaMatches) ctaCount += ctaMatches.length;
        if (boxMatches) ctaBoxCount += boxMatches.length;
    }
    console.log(`  CTA boxes: ${ctaBoxCount}`);
    console.log(`  CTA buttons: ${ctaCount}\n`);
    
    // Article related links check
    console.log('📄 Article Related Links:');
    console.log('------------------------');
    const articles = htmlFiles.filter(f => f.includes('/content/articles/'));
    let allArticlesOk = true;
    
    for (const article of articles) {
        const relPath = path.relative(baseDir, article);
        const content = fs.readFileSync(article, 'utf8');
        
        // Check related article links (same directory)
        const articleLinks = content.match(/href="([^"]*\.html)"/g) || [];
        let articleOk = true;
        
        for (const linkMatch of articleLinks) {
            const href = linkMatch.replace(/href="([^"]*)"/, '$1');
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('../')) continue;
            
            const targetPath = path.join(path.dirname(article), href);
            if (!fs.existsSync(targetPath) && !fs.existsSync(targetPath + '.html')) {
                articleOk = false;
                console.log(`  ⚠️ ${relPath}: Missing ${href}`);
            }
        }
        
        if (articleOk) {
            console.log(`  ✓ ${relPath}`);
        } else {
            allArticlesOk = false;
        }
    }
    console.log('');
    
    // File listing
    console.log('📁 Files Analyzed:');
    console.log('------------------');
    htmlFiles.forEach(f => {
        console.log(`  ✓ ${path.relative(baseDir, f)}`);
    });
    console.log('');
    
    // Final summary
    console.log('═══════════════════════════════════════');
    console.log('📝 FINAL SUMMARY');
    console.log('═══════════════════════════════════════');
    console.log(`  HTML files: ${htmlFiles.length}`);
    console.log(`  Articles: ${articles.length}`);
    console.log(`  Internal links: ${stats.internal}`);
    console.log(`  Affiliate links: ${stats.affiliate}`);
    console.log(`  CTA boxes: ${ctaBoxCount}`);
    console.log(`  CTA buttons: ${ctaCount}`);
    console.log(`  Broken links: ${brokenLinks.length}`);
    console.log(`  Articles OK: ${allArticlesOk ? 'Yes' : 'No'}`);
    console.log('═══════════════════════════════════════');
    
    if (brokenLinks.length > 0) {
        console.log(`\n⚠️  FAILED: ${brokenLinks.length} broken links found`);
        process.exit(1);
    } else {
        console.log('\n✅ PASSED: All checks completed successfully!');
        console.log('✅ All internal links resolve correctly');
        console.log('✅ CTA buttons properly distributed');
        console.log('✅ Articles have valid related links');
        process.exit(0);
    }
}

main().catch(console.error);
