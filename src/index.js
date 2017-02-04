const retreiveManagers = require('./retreiveManagers');
const getHtml = require('./getHtml');

symbols.forEach(s => {
    getHtml(`${s}@live.com`)
        .then(html => retreiveManagers(html))
        .then(names => names.length && console.log(s, names.length))
        .catch(reason => console.error(reason))
})
