const generateVariants = require('./generateVariants')

test('retreives empty result', () => {
    expect(
        generateVariants('@live.com')
    ).toEqual([
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
    ]);
});
