const { completeEmails } = require('./completeEmails');
const managersForQueryUninjected = require('./managersForQuery');
const getHtml = require('./getHtml');

const managersForQuery = managersForQueryUninjected.bind(null, { getHtml });

const logger = {
    log(message) {
        console.log(message);
    }
}

completeEmails({ managersForQuery, logger }, '.com')
    .then(response => {
        console.log(response)
    })
