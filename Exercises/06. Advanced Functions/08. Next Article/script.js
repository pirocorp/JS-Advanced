function getArticleGenerator(articles) {
    const contentElement = document.getElementById('content');

    return function () {
        if (articles.length > 0) {
            const currentArticle = document.createElement('article');
            currentArticle.textContent = articles.shift();
            contentElement.appendChild(currentArticle);
        }
    }
}

