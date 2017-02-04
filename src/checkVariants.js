const parseNames = require('./parseNames');

function checkVariants({ getHtml }, variants) {
    variants.map(variant => {
        getHtml(variant)
            .then(html => parseNames(html))
            .then(names => names.length && console.log(s, names.length))
            .catch(reason => console.error(reason))
    })
}

module.exports = checkVariants;
