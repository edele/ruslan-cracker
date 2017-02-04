const { emails, managersForQuery } = require('./managersForQuery');

test('managersForQuery mock returns all hotmails addresses', done => {
    managersForQuery('@hotmail.com')
        .then(({ managers }) => {
            expect(managers).toEqual(emails)
            done()
        })
})

test('managersForQuery mock returns by subsctring', done => {
    managersForQuery('smith@hotmail.com')
        .then(({ managers }) => {
            expect(managers).toEqual(['smith@hotmail.com', 'morgan.smith@hotmail.com'])
            done()
        })
})

test('managersForQuery mock returns empty result', done => {
    managersForQuery('gmail.com')
        .then(({ managers }) => {
            expect(managers).toEqual([])
            done()
        })
})
