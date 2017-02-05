const { generateVariants, symbols } = require('./generateVariants')
const faker = require('faker');

const escapeRegex = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

test('generate variants tests all possible email faker symbols', () => {
    let bigString = '';
    for (var i = 0; i < 100; i++) {
        bigString += faker.internet.email().toLowerCase()
    }

    symbols.forEach(s => {
        bigString = bigString.replace(new RegExp(escapeRegex(s), 'g'), '');
    })

    expect(bigString).toBe('')
});

test('appends letters', () => {
    expect(
        generateVariants('@live.com')
    ).toEqual(expect.arrayContaining([
        'a@live.com', 'b@live.com', 'c@live.com',
        'd@live.com', 'e@live.com', 'f@live.com',
        'g@live.com', 'h@live.com', 'i@live.com',
        'j@live.com', 'k@live.com', 'l@live.com',
        'm@live.com', 'n@live.com', 'o@live.com',
        'p@live.com', 'q@live.com', 'r@live.com',
        's@live.com', 't@live.com', 'u@live.com',
        'v@live.com', 'w@live.com', 'x@live.com',
        'y@live.com', 'z@live.com', '-@live.com',
        '_@live.com'
    ]));
});

test('appends symbols', () => {
    expect(
        generateVariants('@')
    ).toEqual(expect.arrayContaining([
        '.@', '-@', '_@'
    ]));
});

test('appends numbers', () => {
    expect(
        generateVariants('@')
    ).toEqual(expect.arrayContaining([
        '1@', '2@', '3@',
        '4@', '5@', '6@',
        '7@', '8@', '9@',
    ]));
});
