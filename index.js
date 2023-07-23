// package.json
// NPM -> Node Package Manager
// npm install -D packageName
// npm uninstall

// Modules

// http

// EventEmitter

// const _ = require('lodash'); // cloneDeep

// let obj = {
//   name: 'Newton School',
// };

// let newObj = _.cloneDeep(obj);
// newObj.name = 'Sai Kumar';

// console.log('Old obj ->', obj);
// console.log('new obj->', newObj);

// const os = require('os');
// const userModules = require('./modules');

// console.log(userModules.addFunction(10, 20));
// console.log(userModules.multiplyFunction(10, 20));
// console.log(userModules.multiplyFunction(userModules.newVariable, 20));
// {
//   addFunction: [Function: addFunction],
//   multiplyFunction: [Function: multiplyFunction]
// }
// console.log(os.platform());

const http = require('http');
const fs = require('fs');

let htmlContent = '';
fs.readFile('home.html', '', (err, data) => {
  if (err) return;
  else htmlContent = data;
});

const server = http.createServer((req, res) => {
  // req -> we send something to the server
  // res -> we receive the data from the server
  let responseData = [];
  let name = '';

  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.end(htmlContent);
  } else {
    req.on('data', (e) => {
      console.log(e.toString());
      responseData.push(e);
      // console.log(responseData);
      // responseData = e.toString().split('=');
      // console.log(responseData);
      // res.write(`Welcome ${responseData[1]}`);
    });

    req.on('end', () => {
      // name = responseData[1];
      // console.log('END', responseData[1]);

      name = Buffer.concat(responseData).toString().split('=')[1].split('+');
      // let newName = Buffer.concat(name); ["sai","kumar"]
      // console.log(newName);
      console.log(name.toString());
      let xyz = '';
      name.forEach((e) => {
        xyz += e + ' ';
      });
      // res.end('Hello');
      res.end(`Welcome ${xyz}`);
    });
    // console.log(req.method);
    // console.log(req.payload); Not working
    // res.end(`Welcome ${name}`); Sync Code
  }
});

server.listen(8081);
//localhost:3000 npm start
//localhost:4200
// localhost:8081
