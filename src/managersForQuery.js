const parseNames = require('./parseNames');

module.exports = ({ getHtml }, query) => new Promise((resolve, reject) => {
    getHtml(query)
        .then(html => parseNames(html))
        .then(names => resolve(names))
        .catch(reason => reject(reason))
})
