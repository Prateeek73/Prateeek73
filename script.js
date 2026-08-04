document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Fetch GitHub Repositories Dynamically
    const githubUsername = "Prateeek73";
    const repoList = document.getElementById("repo-list");
    
    if (repoList) {
        // Fetch public repositories for the profile to reflect the ~35 repos
        fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    repoList.innerHTML = "<li>No public repositories found.</li>";
                    return;
                }
                
                data.forEach(repo => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        <p style="font-size: 0.85rem; color: #4b5563; margin-top: 0.5rem;">
                            ${repo.description ? repo.description : "No description available."}
                        </p>
                        <p style="font-size: 0.8rem; margin-top: 0.5rem;">
                            ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
                        </p>
                    `;
                    repoList.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Error fetching GitHub repos:", error);
                repoList.innerHTML = "<li>Failed to load repositories. Please check GitHub directly.</li>";
            });
    }
});
