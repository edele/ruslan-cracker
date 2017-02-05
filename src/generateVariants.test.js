const { generateVariants, symbols } = require('./generateVariants')
const faker = require('faker');

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
        '-@', '_@'
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

const escapeRegex = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

test.skip('covers all possible symbols from faker', () => {
    let emails = '';
    for (let i = 0; i < 100; i++) {
        emails += faker.internet.email().toLowerCase()
    }

    symbols.forEach(s => {
        emails = emails.replace(new RegExp(escapeRegex(s), 'g'), '');
    })

    expect(emails).toBe('')
});
