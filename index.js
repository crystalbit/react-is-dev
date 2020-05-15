const memo = new WeakMap();

module.exports = React => {
    if (memo.has(React)) return memo.get(React);
    const isDev = '_self' in React.createElement('div');
    memo.set(React, isDev);
    return isDev;
}