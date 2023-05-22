const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__dirname));

console.log(path.extname(__filename));

// create path object 
console.log(path.parse(__filename).base);

// concatenate


console.log(path.join(__dirname, 'test', 'hello.html'));