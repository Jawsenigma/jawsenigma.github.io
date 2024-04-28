document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/Jawsenigma/repos')
    .then(response => response.json())
    .then(data => {
        const list = document.createElement('ul');
        data.forEach(repo => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = repo.name;
            item.appendChild(link);
            list.appendChild(item);
        });
        document.body.appendChild(list);
    })
    .catch(error => console.log('Error fetching repos: ', error));
});
