const bruteForce = require('./bruteForce');

const emails = [
    'vasya@hotmail.com', 'vanya@hotmail.com', 'petya@hotmail.com',
    'olya@hotmail.com', 'kira@hotmail.com', 'pasha@hotmail.com',
    'sasha@hotmail.com', 'seryozha@hotmail.com', 'smith@hotmail.com',
    'morgan.smith@hotmail.com', 'sanders@hotmail.com', 'dmitriy@hotmail.com'
]

const managersForQuery = query => new Promise((resolve, reject) => {
    return emails.filter(x => x.indexOf(query) !== -1)
})

test('brute force', () => {
    expect(
        bruteForce({ managersForQuery }, '@hotmail.com')
    ).toEqual(emails)
})

test('managersForQuery mock returns all hotmails addresses', () => {
    managersForQuery('@hotmail.com')
        .then(response => {
            expect(response).toEqual(emails)
            done()
        })
})

test('managersForQuery mock returns by subsctring', () => {
    managersForQuery('smith@hotmail.com')
        .then(response => {
            expect(response).toEqual(['smith@hotmail.com', 'morgan.smith@hotmail.com'])
            done()
        })
})

test('managersForQuery mock returns empty result', () => {
    managersForQuery('smith@hotmail.com')
        .then(response => {
            expect('gmail.com').toEqual([])
            done()
        })
})
