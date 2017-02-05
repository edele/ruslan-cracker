const { generateVariants } = require('./generateVariants');

const filterSuccessfulQueriesUninjected = ({ managersForQuery, logger }, variants) => new Promise((resolve, reject) => {
    Promise.all(variants.map(x => managersForQuery(x)))
        .then(result => {
            if (logger) logger.log(result);
            const successfulQueries = result
                .filter(x => x.managers.length > 0);

            resolve(successfulQueries);
        });
})

const prepareFinalResult = variants => {
    return [variants[variants.length - 1].query]
}

const completeEmails = ({ managersForQuery, logger }, query) => new Promise((resolve, reject) => {
    const filterSuccessfulQueries = filterSuccessfulQueriesUninjected.bind(null, { managersForQuery, logger });
    let rememberedQueries = [];

    const filterCallback = variants => {
        if (variants.length) {
            rememberedQueries = rememberedQueries.concat(variants);
            variants.forEach(x => {
                filterSuccessfulQueries(generateVariants(x.query))
                    .then(filterCallback)
            })
        } else {
            resolve(prepareFinalResult(rememberedQueries));
        }
    }

    filterSuccessfulQueries(generateVariants(query))
        .then(filterCallback)
})

module.exports = completeEmails;