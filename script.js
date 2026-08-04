document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio script loaded successfully");

    // ============================================
    // 1. Smooth Scrolling for Navigation
    // ============================================
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                document.body.style.overflow = "auto";
                
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // ============================================
    // 2. Fetch GitHub Repositories Dynamically
    // ============================================
    const githubUsername = "Prateeek73";
    const repoList = document.getElementById("repo-list");
    
    if (repoList) {
        // Fetch public repositories
        // Using per_page=8 to get more repos for display
        fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&order=desc&per_page=8`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`GitHub API responded with status ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Show only 4 most recently updated repos to avoid redundancy with Featured Projects
                const displayRepos = data.slice(0, 4);

                if (displayRepos.length === 0) {
                    repoList.innerHTML = "<li style='grid-column: 1/-1; text-align: center; padding: 2rem;'>No public repositories found. Visit <a href='https://github.com/Prateeek73' target='_blank'>GitHub</a> to see more.</li>";
                    return;
                }
                
                repoList.innerHTML = ""; // Clear loading text
                
                displayRepos.forEach(repo => {
                    const li = document.createElement("li");
                    
                    // Format the description
                    const description = repo.description 
                        ? repo.description 
                        : "No description available.";
                    
                    // Get primary language
                    const language = repo.language || "N/A";
                    
                    // Format date
                    const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    
                    li.innerHTML = `
                        <a href="${repo.html_url}" target="_blank" style="color: var(--violet); font-weight: bold; font-size: 1rem;">${repo.name}</a>
                        <p style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.5rem; margin-bottom: 0.75rem;">
                            ${description}
                        </p>
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
                            <span style="color: var(--violet); font-family: 'IBM Plex Mono';">
                                <span style="margin-right: 0.5rem;">📍</span>${language}
                            </span>
                            <span style="color: var(--ink-soft);">
                                ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
                            </span>
                        </div>
                        <p style="font-size: 0.75rem; color: #9C8BAF; margin-top: 0.5rem;">Updated ${updatedDate}</p>
                    `;
                    repoList.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Error fetching GitHub repos:", error);
                repoList.innerHTML = `
                    <li style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                        <p style="color: var(--ink-soft);">Failed to load repositories from GitHub.</p>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                            Check out my <a href="https://github.com/Prateeek73" target="_blank" style="color: var(--violet);">GitHub profile</a> directly for the full list.
                        </p>
                    </li>
                `;
            });
    }

    // ============================================
    // 3. Scroll to Top Button (Optional Enhancement)
    // ============================================
    window.addEventListener('scroll', () => {
        // You can add visual effects here based on scroll position
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }
    });

    // ============================================
    // 4. Add subtle animations on scroll (optional)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for fade-in animation
    document.querySelectorAll('.card, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0.9';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // ============================================
    // 5. Resume Download Handler (if needed)
    // ============================================
    const resumeButtons = document.querySelectorAll('[href*="resume"], [href*="Resume"]');
    resumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // You can add custom handling here
            console.log('Resume download initiated');
        });
    });

    // ============================================
    // 6. Form Validation (if contact form exists)
    // ============================================
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }

    // ============================================
    // 7. Mobile Menu Toggle
    // ============================================
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuButton.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuButton.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ============================================
    // 8. Copy to Clipboard for Contact Links
    // ============================================
    document.querySelectorAll('[data-copy]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const text = el.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                const originalText = el.textContent;
                el.textContent = '✓ Copied!';
                setTimeout(() => {
                    el.textContent = originalText;
                }, 2000);
            });
        });
    });

    console.log("All interactive features initialized");
});

// ============================================
// Performance: Log page load time
// ============================================
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});
