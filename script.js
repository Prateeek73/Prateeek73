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
                    <li style="grid-column: 1/-1; text-align: center; padding: 2rem; background: var(--bg); border: 2px solid var(--line); border-radius: 4px;">
                        <p style="color: var(--ink-soft); margin-bottom: 0.5rem;">Unable to load GitHub repositories at this moment.</p>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                            Check out my <a href="https://github.com/Prateeek73" target="_blank" style="color: var(--violet); font-weight: 600;">GitHub profile (Prateeek73)</a> directly for all projects.
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
    // 4. Scroll-Triggered Animations
    // ============================================
    const animationElements = document.querySelectorAll('.card, .timeline-item, .skill-category, .project-group');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards';
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animationElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 50}ms`;
        animationObserver.observe(el);
    });

    // ============================================
    // 5. Number Counter Animation (for statistics)
    // ============================================
    const counters = document.querySelectorAll('[data-target]');

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
        }
        return num.toLocaleString() + '+';
    };

    // Guarded so a counter can only ever run once, no matter which
    // trigger below fires first.
    const startCounter = (el) => {
        if (el.dataset.counting === 'true' || el.classList.contains('counted')) return;
        el.dataset.counting = 'true';

        const target = parseInt(el.getAttribute('data-target'), 10);
        if (!Number.isFinite(target)) return;

        // Respect reduced-motion: show the final value, skip the count-up.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.textContent = formatNumber(target);
            el.classList.add('counted');
            return;
        }

        const duration = 1500;
        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            if (elapsed < duration) {
                // Ease-out so the number decelerates into its final value.
                const progress = 1 - Math.pow(1 - elapsed / duration, 3);
                el.textContent = formatNumber(Math.floor(progress * target));
                requestAnimationFrame(step);
            } else {
                el.textContent = formatNumber(target);
                el.classList.add('counted');
            }
        };

        requestAnimationFrame(step);
    };

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    if (counters.length) {
        // threshold 0 (not 0.5) — an inline span's line box can measure
        // small or zero while webfonts are still resolving.
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        counters.forEach(counter => counterObserver.observe(counter));

        // Safety net: if a counter is already on screen once fonts and
        // layout have settled, start it directly. The observer only
        // reports *changes*, so an element that was in view the whole
        // time can otherwise never get a second callback.
        const sweep = () => counters.forEach(c => {
            if (isInViewport(c)) startCounter(c);
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(sweep);
        }
        window.addEventListener('load', sweep);
        window.addEventListener('scroll', sweep, { passive: true });
    }

    // ============================================
    // 6. Staggered Card Animations
    // ============================================
    const projectGroups = document.querySelectorAll('.project-group');
    projectGroups.forEach((group) => {
        const cards = group.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.setProperty('--animation-delay', `${index * 100}ms`);
        });
    });

    // Add CSS variable support in animation
    const style = document.createElement('style');
    style.textContent = `
        .card {
            animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards var(--animation-delay, 0ms);
        }
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // 7. Confetti Celebration on Email Button Click
    // ============================================
    const emailButtons = document.querySelectorAll('[href^="mailto:"]');
    emailButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            // Subtle confetti preview on hover
            if (window.confetti && Math.random() > 0.7) {
                confetti({
                    particleCount: 3,
                    angle: 90,
                    spread: 45,
                    origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
                });
            }
        });
        
        btn.addEventListener('click', function(e) {
            // Full celebration on click
            if (window.confetti) {
                confetti({
                    particleCount: 50,
                    angle: 90,
                    spread: 60,
                    origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
                    decay: 0.9
                });
                
                // Secondary burst
                setTimeout(() => {
                    confetti({
                        particleCount: 30,
                        angle: 270,
                        spread: 40,
                        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
                    });
                }, 150);
            }
            
            // Show playful success message
            const messages = [
                "Great choice! 🚀",
                "Awesome! I'll be waiting 📧",
                "Let's build something great! 💪",
                "Perfect! Talk soon! 👋",
                "Yes! I'm excited! 🎉"
            ];
            const msg = messages[Math.floor(Math.random() * messages.length)];
            console.log(`%c${msg}`, 'color: #E8963B; font-size: 16px; font-weight: bold;');
        });
    });

    // ============================================
    // 8. Playful Console Message
    // ============================================
    setTimeout(() => {
        console.log(
            '%c🎯 Prateek Singh - Full Stack Engineer & ML Systems Builder\n' +
            '%cLooking for your next backend or ML infrastructure engineer?\n' +
            '%cOpen the Console, hit Inspect, and check out the Easter egg hidden in the code!\n\n' +
            '%cLearn more: https://github.com/Prateeek73\n' +
            '%cEmail: pra73ek.singh@gmail.com',
            'color: #6B2FBF; font-size: 18px; font-weight: bold;',
            'color: #E8963B; font-size: 14px;',
            'color: #241531; font-size: 13px;',
            'color: #6B2FBF; font-size: 12px;',
            'color: #E8963B; font-size: 12px;'
        );
    }, 500);

    // ============================================
    // 9. Playful Interactions on Section Titles
    // ============================================
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            if (window.confetti && Math.random() > 0.5) {
                confetti({
                    particleCount: 20,
                    angle: 90,
                    spread: 70,
                    origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
                    decay: 0.95
                });
            }
        });
    });

    // ============================================
    // 10. Secret Konami Code Easter Egg
    // ============================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        const key = e.key === 'b' ? 'b' : e.key === 'a' ? 'a' : e.code;
        
        if (key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                triggerKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function triggerKonamiEasterEgg() {
        // Celebrate with confetti
        if (window.confetti) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        spread: 360,
                        origin: { x: Math.random(), y: Math.random() * 0.5 }
                    });
                }, i * 150);
            }
        }

        // Show message in console
        console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #6B2FBF; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #E8963B;');
        console.log('%cYou found the secret! This shows Prateek pays attention to details.', 'color: #E8963B; font-size: 14px;');
        console.log('%cFun fact: He built this portfolio while working on ML systems at scale.', 'color: #241531; font-size: 12px;');
        console.log("%cSeriously, email him. He's awesome: pra73ek.singh@gmail.com", 'color: #6B2FBF; font-size: 13px; font-weight: bold;');

        // Playful page reaction
        const hero = document.querySelector('#hero');
        if (hero) {
            hero.style.backgroundColor = '#D4842D'; // Brief color flash
            setTimeout(() => {
                hero.style.backgroundColor = '';
                hero.style.transition = 'background-color 0.3s ease';
            }, 100);
        }
    }

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
