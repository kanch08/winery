import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import App from '../../src/App';
import {store} from "../../src/store/store";
import {Provider} from "react-redux";

const path = require('path');
const fs = require('fs');

export default(req, res, next) => {
    const filePath = path.resolve(path.join(__dirname, '../../build/index.html'))

    fs.readFile(filePath, 'utf8', (err, htmlData) =>{
        if(err) {
            console.log('err', err);
            return res.status(400).end();
        }
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <Provider store={store}>
                <App/>
                </Provider>
            </StaticRouter>
            );
        return  res.send(htmlData.replace(
                '<div id="root"></div>', `<div id="root">${html}</div>`))

    })
}