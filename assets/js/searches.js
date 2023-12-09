// Carga los artículos desde el archivo JSON y los muestra en la página
function loadArticles() {
    fetch('assets/articles.json')
        .then(response => response.json())
        .then(articles => {
            const container = document.getElementById('articles-container');
            articles.forEach(article => {
                const articleHTML = `
                    <article class="col-6 col-12-xsmall work-item">
                        <a href="${article.url}" class="image fit thumb"><img src="${article.image}" alt="${article.title}" /></a>
                        <h3>${article.title}</h3>
                        <div class="tags">
                            ${article.tags.map(tag => `<span>${tag}</span>`).join(' ')}
                        </div>
                    </article>
                `;
                container.innerHTML += articleHTML;
            });
        })
        .catch(error => console.error('Error al cargar los artículos:', error));
}

// Maneja la funcionalidad de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    // Cargar los artículos al cargar la página
    loadArticles();

    // Agregar evento de entrada para la funcionalidad de búsqueda
    document.getElementById('search-input').addEventListener('input', function(e) {
        var searchTerm = e.target.value.toLowerCase();

        var articles = document.querySelectorAll('.work-item');
        
        articles.forEach(function(article) {
            var title = article.querySelector('h3').textContent.toLowerCase();
            var tags = Array.from(article.querySelectorAll('.tags span')).map(function(span) {
                return span.textContent.toLowerCase();
            });

            if (title.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm))) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    });
});

