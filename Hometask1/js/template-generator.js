export default class TemplateGenerator {
    constructor() {
        this.newsElement = document.getElementById('articles');
    }

    createView(articles, portal) {
        let newHtmlCols="";
        articles.forEach(({title, publishedAt, description} = article) => {
            newHtmlCols +=
                `<div class="col-6 col-lg-4">
                    <span class="badge badge-primary badge-pill">${portal}</span>
                    <h4>${title}</h4>
                    <h6>${publishedAt}</h6>
                    <p>${description}</p>
                </div>`
        });
        this.newsElement.innerHTML = `<div class="row">${newHtmlCols}</div>`;
    }
}