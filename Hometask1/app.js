const NEWS_API_KEY = "f41289b0dc1240febd5027d47478f685";

class NEWS {
    constructor() {
        this.oldHtml = document.getElementsByClassName('container marketing')[0].innerHTML;
    }

    viewContent(portal) {
        const url = `https://newsapi.org/v2/top-headlines?sources=${portal.toLowerCase()}&apiKey=${NEWS_API_KEY}`;
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error(response.statusText);
        }).then(json => {
            console.log('Request succeeded:', json);
            const {articles} = json;
            let newHtmlCols = '';
            articles.forEach(({title, publishedAt, description} = article) => {
                newHtmlCols +=
                    `<div class="col-6 col-lg-4">
                    <span class="badge badge-primary badge-pill">${portal} </span>
                    <h4>${title}</h4>
                    <h6>${publishedAt}</h6>
                    <p>${description}</p>
                </div>`
            });
            document.getElementsByClassName('container marketing')[0].innerHTML =
                this.oldHtml + '<div class="row">' + newHtmlCols + '</div>';
        }).catch(error => {
            console.log('Request failed:', error.message);
        });
    }
}

let theNEWS = new NEWS();
