const { generateVariants } = require('./generateVariants');

const filterSuccessfulQueriesUninjected = ({ managersForQuery, logger }, variants) => new Promise((resolve, reject) => {
    Promise.all(variants.map(x => managersForQuery(x)))
        .then(result => {
            if (logger) logger.log(result);
            const successfulQueries = result
                .filter(x => x.managers.length > 0);

            resolve(successfulQueries);
        })
        .catch(reason => console.error(reason));;
})

const prepareFinalResult = variants => {
    const finalMatches = variants.filter(x => x.managers.length === 1)
        .map(x => ({ name: x.managers[0], query: x.query }));

    const groupedByNames = finalMatches.reduce((groups, x) => {
        if (groups[x.name]) {
            groups[x.name].push(x.query);
        } else {
            groups[x.name] = [x.query];
        }

        return groups;
    }, {});

    const result = [];

    for (let g in groupedByNames) {
        let longest = groupedByNames[g]
            .reduce((x, current) => x.length > current.length ? x : current, '');

        result.push(longest);
    }

    return result;
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
                    .catch(reason => console.error(reason));
            })
        } else {
            resolve(prepareFinalResult(rememberedQueries));
        }
    }

    filterSuccessfulQueries(generateVariants(query))
        .then(filterCallback)
        .catch(reason => console.error(reason));
})

module.exports = { completeEmails };
