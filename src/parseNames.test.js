const parseNames = require('./parseNames');

test('parses html with no names', () => {
    expect(
        parseNames(require('../resources/response-0'))
    ).toEqual([])
});

test('parses one manager from html', () => {
    expect(
        parseNames(require('../resources/response-1'))
    ).toEqual(['Danielle Zangara'])
});

test('parses five managers from html', () => {
    expect(
        parseNames(require('../resources/response-5'))
    ).toEqual([
        'Robert O&#39;Hara',
        'Tatyana Glender',
        'Liz Gilliard',
        'Danielle Zangara',
        'Tyler Ford',
    ])
});
