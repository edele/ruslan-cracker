function getUlHtml(html) {
    const resultsHeaderIndex = html.indexOf(`<h3>Результаты поиска:</h3>`);
    const withoutBeginning =  html.slice(resultsHeaderIndex + 27)

    return withoutBeginning.slice(0, withoutBeginning.indexOf('</div>'))
}

function getAllLiContents(html) {
    const regex = /<li>([^<]*)<\/li>/gi;
    const matches = [];
    let latestMatch;

    while (latestMatch = regex.exec(html)) {
        matches.push(latestMatch[1].replace(/\s\s+/g, ' ').trim());
    }

    return matches;
}

function retreiveNames(html) {
    const ulHtml = getUlHtml(html);
    if (ulHtml.indexOf('<li') === -1) return [];

    return getAllLiContents(ulHtml)
}

module.exports = retreiveNames;
