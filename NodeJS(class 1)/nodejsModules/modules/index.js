// Wrapper Module
/* Before a module’s code is executed, Node.js will wrap it with a function wrapper that looks like the following:

(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
 });

source: https://www.vskills.in/certification/tutorial/the-module-wrapper/
*/



// console.log("Node JS ");
// console.log( __filename);
// console.log( __dirname);



///////////////////////////////////////
// Path module

// const path = require('path');

// console.log(path.basename('/hello/main.js'));
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));
// console.log(path.basename(__dirname));


// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// console.log(path.join('/search', '/logo', 'devtrio'));
// console.log(path.join(__dirname, '/logo', 'devtrio'));

// console.log(path.normalize('/logo\\dlsdf/sdfsdf/sdfsdf'));


// console.log(path.parse(__filename));


// console.log(path.isAbsolute('/home'));
// console.log(path.isAbsolute('home/sdfsdf/sdfsd'));




///////////////////////////////////////
// OS module


// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.freemem());
// console.log(os.totalmem());


///////////////////////////////////////
// URL modules;


// const {URL} = require('url');

// const myURL = new URL('https://www.devtrio.com:8000/a/p/tech?query=hello#hash');

// console.log(myURL.hash);
// console.log(myURL.host);
// console.log(myURL.hostname);
// console.log(myURL.href);
// console.log(myURL.origin);
// console.log(myURL.port);
// console.log(myURL.pathname);
// console.log(myURL.protocol);
// console.log(myURL.search);
// console.log(myURL.searchParams);
// console.log(myURL.toString());
// console.log(myURL.toJSON());





///////////////////////////////////////
// Event modules;

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {};


// const myEvent = new MyEmitter();

// let x =  0;
// myEvent.on('test',  ()=> {
//     console.log('event log', ++x);
// });
// myEvent.once('test',  ()=> {
//     console.log('event log', ++x);
// });

// myEvent.emit('test');
// myEvent.emit('test');
// myEvent.emit('test');