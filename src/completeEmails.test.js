const { completeEmails } = require('./completeEmails');
const { managersForQuery } = require('./mocks/managersForQuery');

test('completes one email', done => {
    completeEmails({ managersForQuery }, 'y@hotmail.com')
        .then(response => {
            expect(response).toEqual(['dmitriy@hotmail.com'])
            done()
        });
});

test.skip('completes many emails', done => {
    completeEmails({ managersForQuery }, 'a@hotmail.com')
        .then(response => {
            expect(response).toEqual([
                'vasya@hotmail.com', 'vanya@hotmail.com', 'petya@hotmail.com',
                'olya@hotmail.com', 'kira@hotmail.com', 'pasha@hotmail.com',
                'sasha@hotmail.com', 'seryozha@hotmail.com'
            ]);
            done();
        })
});

test.only('logs', done => {
    const logger = {
        log: jest.fn()
    };

    completeEmails({ managersForQuery, logger }, 'y@hotmail.com')
        .then(response => {
            expect(logger.log).toBeCalled();
            done();
        })
});
