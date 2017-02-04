const symbols = 'abcdefghijklmnopqrstuvwxyz-_'.split('');

function generateVariants(rightPart) {
    return symbols.map(s => s + rightPart);
}

module.exports = generateVariants;
