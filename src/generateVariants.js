const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789-_@'.split('');

function generateVariants(rightPart) {
    const result = [];

    for (let i = 0; i < symbols.length; i++) {
        if (rightPart.length && rightPart[0] === '.' && symbols[i] === '.') continue;

        result.push(symbols[i] + rightPart);
    }

    return result;
}

module.exports = { generateVariants, symbols };
