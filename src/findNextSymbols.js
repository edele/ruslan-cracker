const generateVariants = require('./generateVariants');

const filterSuccessfulQueries = ({ managersForQuery }, variants) => new Promise((resolve, reject) => {
    Promise.all(variants.map(x => managersForQuery(x)))
        .then(result => {
            const successfulQueries = result
                .filter(x => x.managers.length > 0)
                .map(x => x.query);

            resolve(successfulQueries);
        });
})

const findNextSymbols = ({ managersForQuery }, query) => new Promise((resolve, reject) => {
    const variants = generateVariants(query);

    filterSuccessfulQueries({ managersForQuery }, variants)
        .then(successfulQueries => resolve(successfulQueries))
})

module.exports = { findNextSymbols };
