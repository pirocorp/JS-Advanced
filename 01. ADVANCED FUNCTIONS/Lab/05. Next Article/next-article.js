function getArticleGenerator(input){ 
    const contentElement = document.getElementById('content');
    
    return function () {
        if(input.length > 0){
            const currentArticle = document.createElement('article');
            currentArticle.textContent = input.shift();
            contentElement.appendChild(currentArticle);
        }
    }
}