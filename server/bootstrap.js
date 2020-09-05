require('ignore-styles');
require('@babel/register')({
    ignore: [ /(node_modules)/ ],
});


require('./index');