import RequestGenerator from "./request-generator.js";
import {PORTALS} from "./constans.js";

let requestGenerator = new RequestGenerator();
PORTALS.forEach(portal =>
    document.getElementById(portal).addEventListener('click', () => requestGenerator.doRequest(portal))
);
