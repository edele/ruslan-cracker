const managersForQueryWithoutDependancies = require('./managersForQuery');

const getHtml = query => new Promise((resolve, reject) => {
    if (query == 'info') return resolve(require('../resources/response-5'));
    if (query == 'info@') return resolve(require('../resources/response-1'));
    if (query == 'asdf') return resolve(require('../resources/response-0'));

    reject('argument is not implemented in mock object')
})

const managersForQuery = managersForQueryWithoutDependancies.bind(null, { getHtml });

test('gets no managers', done => {
    managersForQuery('asdf')
        .then(({ managers }) => {
            expect(managers.length).toBe(0);
            done();
        });
})

test('gets one manager', done => {
    managersForQuery('info@')
        .then(({ managers }) => {
            expect(managers.length).toBe(1);
            done();
        });
})

test('gets five managers', done => {
    managersForQuery('info')
        .then(({ managers }) => {
            expect(managers.length).toBe(5);
            done();
        });
})

test('returns query with managers', done => {
    managersForQuery('info')
        .then(({ query }) => {
            expect(query).toBe('info');
            done();
        });
})
