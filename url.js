const url = require('url');

const myURL = new URL('https://www.google.com:1221/hello?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.href.toString);

// host root name
console.log(myURL.host);

//hostname without Port
console.log(myURL.hostname)

//pathname
console.log(myURL.pathname);

//Query serialized 
console.log(myURL.search);

//params object
console.log(myURL.searchParams);

//ADD PARAM
myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);
console.log(myURL.href);
myURL.searchParams.forEach((value, name)=>{
console.log(`${name} : ${value}`);
})