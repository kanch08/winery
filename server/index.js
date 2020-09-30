import express from 'express';
import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require('path');
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);
router.use(express.static(path.resolve(path.join(__dirname, '../build/index.html')), {maxAge: '30d'}));
router.use('/static', express.static(path.resolve(__dirname, '../build/static')));


app.use(router);

app.listen(PORT, (error) => {
    if(error) {
        return console.log('SOmething bad happened', error);
    }
    console.log("listening on", PORT, '....');
})