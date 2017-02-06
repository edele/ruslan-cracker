const fs = require('fs');

fs.readFile('./result', 'utf-8', (err, string) => {
    if (err) throw err;

    const a = string.split('\n');
    const array = a.slice(0, a.length - 1);
    const unique = array.filter((item, pos) => array.indexOf(item) == pos)

    console.log(JSON.stringify(unique))
});
