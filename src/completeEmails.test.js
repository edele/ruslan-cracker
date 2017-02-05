const completeEmails = require('./completeEmails');
const { managersForQuery } = require('./mocks/managersForQuery');

test('completes one email', done => {
    completeEmails({ managersForQuery }, 'y@hotmail.com')
        .then(response => {
            expect(response).toEqual(['dmitriy@hotmail.com'])
            done()
        })
});
