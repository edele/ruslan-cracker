const parseNames = require('./parseNames');

module.exports = ({ getHtml }, query) => new Promise((resolve, reject) => {
    getHtml(query)
        .then(html => parseNames(html))
        .then(managers => resolve({ managers, query }))
        .catch(reason => reject(reason))
})
