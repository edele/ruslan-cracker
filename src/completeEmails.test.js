const { completeEmails } = require('./completeEmails');
const { managersForQuery } = require('./mocks/managersForQuery');

test('completes one email', done => {
    completeEmails({ managersForQuery }, 'y@hotmail.com')
        .then(response => {
            expect(response).toEqual(['dmitriy@hotmail.com'])
            done()
        })
        .catch(reason => console.error(reason));
});

test('completes many emails', done => {
    completeEmails({ managersForQuery }, 'a@hotmail.com')
        .then(response => {
            expect(response).toEqual([
                'vasya@hotmail.com', 'vanya@hotmail.com', 'petya@hotmail.com',
                'olya@hotmail.com', 'kira@hotmail.com', 'pasha@hotmail.com',
                'sasha@hotmail.com', 'seryozha@hotmail.com'
            ]);
            done();
        })
        .catch(reason => console.error(reason));
});

test('logs', done => {
    const logger = {
        log: jest.fn()
    };

    completeEmails({ managersForQuery, logger }, 'y@hotmail.com')
        .then(response => {
            expect(logger.log).toBeCalled();
            done();
        })
        .catch(reason => console.error(reason));
});
