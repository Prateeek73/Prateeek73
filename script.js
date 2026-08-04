:root {
    --bg: #F3ECFB;
    --bg-white: #FFFDF9;
    --ink: #241531;
    --ink-soft: #6B5A80;
    --violet: #6B2FBF;
    --violet-deep: #3A1868;
    --amber: #E8963B;
    --line: #D9C7F0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg);
    background-image:
        radial-gradient(var(--line) 1px, transparent 1px);
    background-size: 22px 22px;
    color: var(--ink);
    line-height: 1.6;
    font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
}

.mono {
    font-family: 'IBM Plex Mono', monospace;
}

/* Navigation */
nav {
    background-color: var(--bg-white);
    border-bottom: 2px solid var(--ink);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    background: var(--violet);
    color: var(--bg-white);
    padding: 0.25rem 0.6rem;
    border: 2px solid var(--ink);
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

nav a {
    text-decoration: none;
    color: var(--ink);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.2s;
}

nav a:hover {
    color: var(--violet);
}

/* Hero Section */
#hero {
    background: var(--violet);
    background-image: repeating-linear-gradient(
        135deg,
        rgba(255,255,255,0.035) 0px,
        rgba(255,255,255,0.035) 2px,
        transparent 2px,
        transparent 14px
    );
    color: var(--bg-white);
    padding: 9rem 1rem 5rem;
    text-align: center;
    border-bottom: 2px solid var(--ink);
}

.hero-content h1 {
    font-size: 3.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
}

.kicker {
    font-family: 'IBM Plex Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--amber);
    margin-bottom: 1rem;
}

.kicker::before {
    content: "▸ ";
}

.hero-meta {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    opacity: 0.85;
    margin-top: 0.5rem;
}

.hero-content h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
    opacity: 0.95;
}

.btn {
    display: inline-block;
    background-color: var(--amber);
    color: var(--ink);
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 var(--ink);
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    margin-top: 1.75rem;
    transition: transform 0.15s, box-shadow 0.15s;
}

.btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--ink);
}

/* Common Container */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 1rem;
}

.eyebrow {
    display: block;
    text-align: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    color: var(--violet);
    opacity: 0.7;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 1.9rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--ink);
    text-align: center;
    position: relative;
    padding-bottom: 0.75rem;
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 4px;
    background: var(--amber);
}

.subtitle {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--ink-soft);
}

hr {
    border: 0;
    height: 2px;
    background: var(--line);
    max-width: 1100px;
    margin: 0 auto;
}

/* Experience Timeline */
.timeline-item {
    background: var(--bg-white);
    padding: 1.5rem;
    border: 2px solid var(--ink);
    box-shadow: 5px 5px 0 var(--line);
    margin-bottom: 1.75rem;
}

.timeline-item h3 {
    color: var(--ink);
    font-weight: 600;
}

.timeline-item .date {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--violet);
    font-size: 0.85rem;
    display: block;
    margin: 0.35rem 0 1rem;
}

.timeline-item ul {
    margin-left: 1.5rem;
    color: var(--ink-soft);
}

/* Grid Layouts for Projects and Skills */
.project-group {
    margin-bottom: 3rem;
}

.project-group:last-of-type {
    margin-bottom: 0;
}

.group-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--violet);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-bottom: 2px solid var(--ink);
    padding-bottom: 0.5rem;
    margin-bottom: 0.25rem;
}

.group-subtitle {
    color: var(--ink-soft);
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.75rem;
}

.card {
    background: var(--bg-white);
    padding: 1.5rem;
    border: 2px solid var(--ink);
    box-shadow: 5px 5px 0 var(--violet);
    display: flex;
    flex-direction: column;
    transition: transform 0.15s, box-shadow 0.15s;
}

.card:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 var(--violet);
}

.card h3 {
    font-weight: 600;
}

.card p {
    color: var(--ink-soft);
}

.card .tags {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.card .tag {
    background: var(--bg);
    color: var(--violet-deep);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--line);
}

.card-num {
    display: inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--amber);
    margin-bottom: 0.5rem;
}

.card-link {
    margin-top: 1.25rem;
    color: var(--violet);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
}

.card-link:hover {
    color: var(--violet-deep);
    text-decoration: underline;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.skill-category {
    background: var(--bg-white);
    padding: 1.5rem;
    text-align: center;
    border: 2px solid var(--ink);
    box-shadow: 5px 5px 0 var(--line);
}

.skill-category h3 {
    font-weight: 600;
    color: var(--violet);
}

.skill-category p {
    color: var(--ink-soft);
}

/* GitHub Dynamic Section */
.github-section {
    margin-top: 3rem;
    background: var(--bg-white);
    padding: 2rem;
    border: 2px solid var(--ink);
    box-shadow: 5px 5px 0 var(--amber);
}

.github-section h3 {
    font-weight: 600;
}

.repo-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.repo-list li {
    background: var(--bg);
    padding: 1rem;
    border: 1px solid var(--line);
}

.repo-list a {
    text-decoration: none;
    color: var(--violet);
    font-weight: bold;
}

/* Footer */
footer {
    background-color: var(--ink);
    color: var(--bg-white);
    padding: 3rem 1rem;
    border-top: 2px solid var(--violet);
}

footer h2 {
    font-weight: 700;
}

footer a {
    color: var(--amber);
    font-family: 'IBM Plex Mono', monospace;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

.social-links {
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.copyright {
    font-family: 'IBM Plex Mono', monospace;
    color: #9C8BAF;
    font-size: 0.8rem;
}
