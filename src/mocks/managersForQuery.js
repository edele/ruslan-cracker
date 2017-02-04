const emails = [
    'vasya@hotmail.com', 'vanya@hotmail.com', 'petya@hotmail.com',
    'olya@hotmail.com', 'kira@hotmail.com', 'pasha@hotmail.com',
    'sasha@hotmail.com', 'seryozha@hotmail.com', 'smith@hotmail.com',
    'morgan.smith@hotmail.com', 'sanders@hotmail.com', 'dmitriy@hotmail.com'
]

const managersForQuery = query => new Promise(resolve =>
    resolve({
        managers: emails.filter(x => x.indexOf(query) !== -1),
        query
    })
)

module.exports = { emails, managersForQuery }
