const retreiveNames = require('./retreiveNames');

test('retreives empty result', () => {
    expect(
        retreiveNames(require('../resources/response-0'))
    ).toEqual([])
});

test('retreives one name', () => {
    expect(
        retreiveNames(require('../resources/response-1'))
    ).toEqual(['Danielle Zangara'])
});

test('retreives five names', () => {
    expect(
        retreiveNames(require('../resources/response-5'))
    ).toEqual([
        'Robert O&#39;Hara',
        'Tatyana Glender',
        'Liz Gilliard',
        'Danielle Zangara',
        'Tyler Ford',
    ])
});
