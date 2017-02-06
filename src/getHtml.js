const cookie = require('../resources/myCookie');
const request = require('requestretry');

const getHtml = query => new Promise((resolve, reject) => {
    request.post({
        url: 'http://ctf.xn--80aqpnq.xn--p1acf/Search',
        headers: { cookie },
        formData: { query }
    }, (error, response, body) => {
        if (error) reject(error);
        resolve(body);
    })
});

module.exports = getHtml;
