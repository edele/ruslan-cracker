const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789-_.@'.split('');

function generateVariants(rightPart) {
    return symbols.map(s => s + rightPart);
}

module.exports = { generateVariants, symbols };
