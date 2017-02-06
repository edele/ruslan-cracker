const json = require('./parsed-com.json');

const queries = json.filter(x => x.managers.length === 1)

const finalMatches = queries.filter(x => x.managers.length === 1)
    .map(x => ({ name: x.managers[0], query: x.query }));

const groupedByNames = finalMatches.reduce((groups, x) => {
    if (groups[x.name]) {
        groups[x.name].push(x.query);
    } else {
        groups[x.name] = [x.query];
    }

    return groups;
}, {});

const result = [];

for (let g in groupedByNames) {
    let longest = groupedByNames[g]
        .reduce((x, current) => x.length > current.length ? x : current, '');

    result.push(longest);
}

console.log(JSON.stringify(result))
