const { bruteForce, findNextSymbols } = require('./findNextSymbols');
const { managersForQuery } = require('./mocks/managersForQuery');

test('finds out next possible symbols', done => {
    findNextSymbols({ managersForQuery }, '@hotmail.com')
        .then(response => {
            expect(response).toEqual(['a@hotmail.com', 'h@hotmail.com', 's@hotmail.com', 'y@hotmail.com'])
            done()
        })
})
