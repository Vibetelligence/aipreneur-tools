/**
 * Site Search Functionality
 * Searches through page content for tools, categories, and article titles
 */

(function() {
    'use strict';

    // Search data - keywords indexed for the site
    const searchIndex = [
        // Tool names
        { type: 'tool', name: 'Notion', keywords: ['notion', 'workspace', 'database', 'notes', 'wiki'], url: 'tools.html#project-management' },
        { type: 'tool', name: 'ClickUp', keywords: ['clickup', 'project management', 'tasks', 'time tracking'], url: 'tools.html#project-management' },
        { type: 'tool', name: 'Jasper', keywords: ['jasper', 'ai writing', 'copywriting', 'enterprise'], url: 'tools.html#writing' },
        { type: 'tool', name: 'Copy.ai', keywords: ['copy.ai', 'copyai', 'blog', 'social media', 'email'], url: 'tools.html#writing' },
        { type: 'tool', name: 'Writesonic', keywords: ['writesonic', 'seo', 'long-form'], url: 'tools.html#writing' },
        { type: 'tool', name: 'Rytr', keywords: ['rytr', 'budget', 'affordable'], url: 'tools.html#writing' },
        { type: 'tool', name: 'Make', keywords: ['make', 'automation', 'workflows', 'integromat'], url: 'tools.html#automation' },
        { type: 'tool', name: 'Zapier', keywords: ['zapier', 'integration', 'app connect'], url: 'tools.html#automation' },
        { type: 'tool', name: 'n8n', keywords: ['n8n', 'self-hosted', 'developer'], url: 'tools.html#automation' },
        { type: 'tool', name: 'Descript', keywords: ['descript', 'video editing', 'podcast', 'text editing'], url: 'tools.html#video-audio' },
        { type: 'tool', name: 'Runway', keywords: ['runway', 'ai video', 'generation'], url: 'tools.html#video-audio' },
        { type: 'tool', name: 'ChatGPT', keywords: ['chatgpt', 'openai', 'conversational ai', 'assistant'], url: 'tools.html#productivity' },
        { type: 'tool', name: 'Grammarly', keywords: ['grammarly', 'grammar', 'writing assistant'], url: 'tools.html#productivity' },
        { type: 'tool', name: 'Todoist', keywords: ['todoist', 'task management', 'productivity'], url: 'tools.html#productivity' },
        { type: 'tool', name: 'HubSpot', keywords: ['hubspot', 'crm', 'marketing', 'sales'], url: 'tools.html#crm-marketing' },
        { type: 'tool', name: 'ConvertKit', keywords: ['convertkit', 'email marketing', 'creator'], url: 'tools.html#crm-marketing' },
        { type: 'tool', name: 'Mailchimp', keywords: ['mailchimp', 'landing pages', 'customer journey'], url: 'tools.html#crm-marketing' },
        { type: 'tool', name: 'Asana', keywords: ['asana', 'team workflow', 'collaboration'], url: 'tools.html#project-management' },
        { type: 'tool', name: 'Monday.com', keywords: ['monday', 'monday.com', 'visual project management'], url: 'tools.html#project-management' },
        { type: 'tool', name: 'Canva', keywords: ['canva', 'design', 'graphics', 'presentations'], url: 'tools.html#video-audio' },
        { type: 'tool', name: 'Adobe', keywords: ['adobe', 'photoshop', 'illustrator', 'premiere'], url: 'tools.html#design' },
        { type: 'tool', name: 'Stripe', keywords: ['stripe', 'payment', 'subscription'], url: 'tools.html#finance' },
        { type: 'tool', name: 'Slack', keywords: ['slack', 'team communication', 'messaging'], url: 'tools.html#communication' },
        { type: 'tool', name: 'Zoom', keywords: ['zoom', 'video conferencing', 'meetings'], url: 'tools.html#communication' },
        
        // Categories
        { type: 'category', name: 'Writing Tools', keywords: ['writing', 'copywriting', 'content creation', 'blog', 'ai writer'], url: 'tools.html#writing' },
        { type: 'category', name: 'Project Management', keywords: ['project management', 'tasks', 'kanban', 'workflow'], url: 'tools.html#project-management' },
        { type: 'category', name: 'Automation', keywords: ['automation', 'workflow', 'integration', 'zap', 'make'], url: 'tools.html#automation' },
        { type: 'category', name: 'Video & Audio', keywords: ['video', 'audio', 'podcast', 'editing', 'descript'], url: 'tools.html#video-audio' },
        { type: 'category', name: 'CRM & Marketing', keywords: ['crm', 'marketing', 'email', 'sales', 'customer'], url: 'tools.html#crm-marketing' },
        { type: 'category', name: 'Productivity', keywords: ['productivity', '效率', 'task', 'organization'], url: 'tools.html#productivity' },
        { type: 'category', name: 'Communication', keywords: ['communication', 'team', 'chat', 'meeting'], url: 'tools.html#communication' },
        { type: 'category', name: 'Finance', keywords: ['finance', 'accounting', 'payment', 'invoice'], url: 'tools.html#finance' },
        { type: 'category', name: 'Design', keywords: ['design', 'creative', 'graphics', 'video'], url: 'tools.html#design' },
        
        // Article titles
        { type: 'article', name: 'AI Writing Tools Guide', keywords: ['best ai writing tools', 'ai copywriter'], url: 'content/articles/best-ai-writing-tools.html' },
        { type: 'article', name: 'Notion vs ClickUp', keywords: ['notion vs clickup', 'workspace comparison'], url: 'content/articles/notion-vs-clickup.html' },
        { type: 'article', name: 'Business Automation Guide', keywords: ['automation', 'automate business', 'workflow automation'], url: 'content/articles/business-automation-guide.html' },
        { type: 'article', name: 'AI Tools for Photographers', keywords: ['photographer', 'creative ai', 'photo editing'], url: 'content/articles/ai-tools-photographers.html' },
        { type: 'article', name: 'Solopreneur AI Stack', keywords: ['solopreneur', 'solo entrepreneur', 'one person business'], url: 'content/articles/solopreneur-ai-stack.html' },
        { type: 'article', name: 'AI Tools Pricing', keywords: ['pricing', 'cost', 'affordable', 'free'], url: 'content/articles/ai-tools-pricing.html' },
        { type: 'article', name: 'AI Tools for Real Estate', keywords: ['real estate', 'property', 'realtor'], url: 'content/articles/best-ai-tools-real-estate.html' },
        { type: 'article', name: 'Ultimate AI Tools Guide', keywords: ['guide', 'overview', 'comprehensive'], url: 'resources/ultimate-ai-tools-guide-2026.html' },
        
        // Common search terms
        { type: 'search', name: 'AI Tools', keywords: ['ai tools', 'artificial intelligence', 'ai software'], url: 'tools.html' },
        { type: 'search', name: 'Free Tools', keywords: ['free', 'no cost', 'free tier', 'free plan'], url: 'tools.html' },
        { type: 'search', name: 'Small Business', keywords: ['small business', 'small business', 'startup', 'entrepreneur'], url: 'index.html' },
        { type: 'search', name: 'Reviews', keywords: ['review', 'reviews', 'rating', 'comparison'], url: 'reviews.html' }
    ];

    // DOM elements
    let searchInput, searchResults, searchContainer;

    /**
     * Initialize search functionality
     */
    function init() {
        searchInput = document.getElementById('site-search');
        searchResults = document.getElementById('search-results');
        searchContainer = document.querySelector('.search-container');

        if (!searchInput || !searchResults) {
            console.warn('Search elements not found');
            return;
        }

        // Add event listeners
        searchInput.addEventListener('input', debounce(handleSearch, 200));
        searchInput.addEventListener('focus', handleFocus);
        searchInput.addEventListener('keydown', handleKeydown);
        searchInput.addEventListener('blur', debounce(handleBlur, 200));

        // Close results when clicking outside
        document.addEventListener('click', function(e) {
            if (searchContainer && !searchContainer.contains(e.target)) {
                hideResults();
            }
        });

        // Close on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideResults();
                searchInput.blur();
            }
        });
    }

    /**
     * Debounce utility function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Handle search input
     */
    function handleSearch(e) {
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            hideResults();
            return;
        }

        const results = searchContent(query);
        showResults(results, query);
    }

    /**
     * Search through indexed content
     */
    function searchContent(query) {
        const results = [];

        // Search through indexed items
        searchIndex.forEach(item => {
            const nameMatch = item.name.toLowerCase().includes(query);
            const keywordMatch = item.keywords.some(keyword => 
                keyword.toLowerCase().includes(query)
            );

            if (nameMatch || keywordMatch) {
                // Calculate relevance score
                let score = 0;
                if (item.name.toLowerCase().startsWith(query)) score += 10;
                if (nameMatch) score += 5;
                if (keywordMatch) score += 3;

                results.push({
                    ...item,
                    score: score,
                    matchedText: getMatchedText(item, query)
                });
            }
        });

        // Sort by score and return top results
        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, 8);
    }

    /**
     * Get matched text highlight
     */
    function getMatchedText(item, query) {
        const keywords = item.keywords.join(', ');
        if (keywords.toLowerCase().includes(query)) {
            return keywords;
        }
        return item.name;
    }

    /**
     * Show search results
     */
    function showResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result search-no-results">
                    <p>No results found for "${escapeHtml(query)}"</p>
                    <p class="search-hint">Try searching for a tool name, category, or topic</p>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(result => `
                <a href="${result.url}" class="search-result" data-url="${result.url}">
                    <div class="search-result-type">${getTypeIcon(result.type)}</div>
                    <div class="search-result-content">
                        <div class="search-result-name">${highlightMatch(result.name, query)}</div>
                        ${result.matchedText !== result.name ? `<div class="search-result-keywords">${highlightMatch(result.matchedText, query)}</div>` : ''}
                    </div>
                </a>
            `).join('');
        }

        searchResults.style.display = 'block';
    }

    /**
     * Highlight matching text
     */
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    /**
     * Get type icon
     */
    function getTypeIcon(type) {
        const icons = {
            'tool': '🔧',
            'category': '📁',
            'article': '📄',
            'search': '🔍'
        };
        return icons[type] || '📌';
    }

    /**
     * Hide search results
     */
    function hideResults() {
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }

    /**
     * Handle input focus
     */
    function handleFocus(e) {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            const results = searchContent(query);
            showResults(results, query);
        }
    }

    /**
     * Handle input blur
     */
    function handleBlur(e) {
        // Delay hiding to allow click on results
        setTimeout(() => {
            // Only hide if not focused on results
            if (!searchResults.matches(':hover')) {
                hideResults();
            }
        }, 200);
    }

    /**
     * Handle keyboard navigation
     */
    function handleKeydown(e) {
        const results = searchResults.querySelectorAll('.search-result:not(.search-no-results)');
        const current = searchResults.querySelector('.search-result.active');
        const currentIndex = Array.from(results).indexOf(current);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (current && currentIndex < results.length - 1) {
                current.classList.remove('active');
                results[currentIndex + 1].classList.add('active');
            } else if (!current && results.length > 0) {
                results[0].classList.add('active');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (current && currentIndex > 0) {
                current.classList.remove('active');
                results[currentIndex - 1].classList.add('active');
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (current) {
                window.location.href = current.dataset.url;
            }
        }
    }

    /**
     * Escape HTML special characters
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Escape regex special characters
     */
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
