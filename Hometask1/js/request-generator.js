import {NEWS_API_KEY} from "./constans.js";
import TemplateGenerator from "./template-generator.js";

export default class RequestGenerator {
    constructor() {
        this.templateGenerator = new TemplateGenerator;
    }

    doRequest(portal) {
        const url = `https://newsapi.org/v2/top-headlines?sources=${portal.toLowerCase()}&apiKey=${NEWS_API_KEY}`;
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error(response.statusText);
        }).then(json => {
            console.log('Request succeeded:', json);
            this.templateGenerator.createView(json.articles, portal);
        }).catch(error => {
            console.log('Request failed:', error.message);
        });
    }
}
