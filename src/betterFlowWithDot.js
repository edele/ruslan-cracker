const { generateVariants } = require('./generateVariants');
const managersForQueryUninjected = require('./managersForQuery');
const getHtml = require('./getHtml');
const managersForQuery = managersForQueryUninjected.bind(null, { getHtml });
const beginninngs = require('./betterFlowDeduplicated.json')
    .map(x => '.' + x)

const checkQueries = variants => new Promise((resolve, reject) => {
    Promise.all(variants.map(x => managersForQuery(x)))
        .then(result => {
            const successfulQueries = result
                .filter(x => x.managers.length > 0);

            resolve(successfulQueries);
        })
        .catch(reason => console.error(reason));
})


let current = 0;

const takeNext = () => {
    let prevQuery = beginninngs[current];

    const checkQueriesCallback = queries => {
        if (queries.length > 1) console.error('more than one successfull queries');

        if (queries.length === 1) {
            prevQuery = queries[0].query
            checkQueries(generateVariants(prevQuery))
                .then(checkQueriesCallback)
                .catch(x => console.error(x))
        }

        if (queries.length === 0) {
            console.log(prevQuery);
            current++;
            checkQueries(generateVariants(beginninngs[current]))
                .then(checkQueriesCallback)
                .catch(x => console.error(x))
        }
    }

    checkQueries(generateVariants(beginninngs[current]))
        .then(checkQueriesCallback)
        .catch(x => console.error(x))

}

takeNext()
