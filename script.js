document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display GitHub projects
    fetch('https://api.github.com/users/Jawsenigma/repos')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects-list');
            container.innerHTML = '';  // Clear the "Loading projects..." text
            const list = document.createElement('ul');
            data.forEach(repo => {
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                item.appendChild(link);
                list.appendChild(item);
            });
            container.appendChild(list);
        })
        .catch(error => {
            document.getElementById('projects-list').innerHTML = 'Failed to load projects';
            console.log('Error fetching repos: ', error);
        });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});