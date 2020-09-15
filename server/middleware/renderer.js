import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter,  matchPath } from 'react-router-dom';
import App from '../../src/App';
import {Provider} from "react-redux";
import url from "url";
import {activeRoutes} from "../../src/routesList";
import {Routes} from '../../src/serverRoutes';
import {store} from "../../src/store/store";

const path = require('path');
const fs = require('fs');
const injectHTML = require('../utility').injectHTML;

const generatePrerequisite = async (req, store) => {
    const resObj = {
        isServerRoute: false,
    };
    for (const route of Routes) {
        const match = matchPath(req.url, route);
        if (match) {
            try {
                const res = await route.loadData(store);
                resObj.isServerRoute = true;
                return resObj;
            } catch (e) {
                console.log('\x1b[41m', `Error while loading prerequisite data ${e}`, '\x1b[40m');
                return e;
            }
        }
    }
    return resObj;
};


export default (req, res, next) => {
    const filePath = path.resolve(path.join(__dirname, '../../build/index.html'))
    generatePrerequisite(req, store)
        .then((resObj) => {
            if (!resObj.isServerRoute) {
                let isReactRoute = false;
                for (const route of activeRoutes) {
                    const matchUrl = url.parse(req.url).pathname;
                    const match = matchPath(matchUrl, route);
                    if (match) {
                        isReactRoute = true;
                    }
                }
                if (isReactRoute) {
                    res.sendFile(path.resolve(__dirname, '../build/index.html'));
                } else {
                    return res.status(404).sendFile(path.resolve(__dirname, '../build/index.html'));
                }
            } else {
                fs.readFile(filePath, 'utf8', (err, htmlData) => {
                    if (err) {
                        console.log('err', err);
                        return res.status(400).end();
                    } else {
                        const view = ReactDOMServer.renderToString(
                            <StaticRouter location={req.url}>
                                <Provider store={store}>
                                    <App/>
                                </Provider>
                            </StaticRouter>
                        );

                        const html = injectHTML(htmlData, {
                            body: view,
                            state: JSON.stringify(''),
                        });
                        return res.send(html);
                    }
                })
            }
        })
        .catch(e => {
            console.log('error', e);
            res.send('err0r page');
        });
};
