document.addEventListener('DOMContentLoaded', function() {
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
});
