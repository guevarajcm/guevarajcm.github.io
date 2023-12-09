document.addEventListener('DOMContentLoaded', function() {
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
