exports.injectHTML = (dataHtml, { body, state }) => {
    let data = dataHtml;
    data = data.replace(
        '<div id="root">',
        `<div id="root">${body}`,
    );
    data = data.replace('<body>', `<body><script>window.__PRELOADED_STATE__ = ${state}</script>`);
    return data;
};
