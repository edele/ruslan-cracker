const { completeEmails } = require('./completeEmails');
const managersForQueryUninjected = require('./managersForQuery');
const getHtml = require('./getHtml');

const managersForQuery = managersForQueryUninjected.bind(null, { getHtml });

const logger = {
    log(message) {
        console.log(message);
    }
}

// completeEmails({ managersForQuery, logger }, process.argv[2])
//     .then(response => {
//         console.log(response)
//     })

completeEmails({ managersForQuery, logger }, require('./single.json').slice(0, 5))
    .then(response => {
        console.log(response)
    })
    .catch(x => console.error(x));
