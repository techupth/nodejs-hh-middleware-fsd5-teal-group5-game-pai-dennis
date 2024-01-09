import { createRequire } from 'module';
const require = createRequire(import.meta.url);



function logging(req, res, next) {
  var fs = require("fs");

  fs.appendFile('data/logs.txt',`IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\r\n`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  next();
}

export default logging;
