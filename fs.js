const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder Create Successfully');
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File is Successfully Written!');
//     //file append
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' Node JS is Amazing', err => {
//         if (err) throw err;
//         console.log('File is Successfully Written!');
//     })

// })

//read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data)=> {
//     if(err) throw err;
//     console.log(data);
// })

//Rename a file

// fs.rename(path.join(__dirname, '/test', 'helloWorld.txt'), path.join(__dirname, '/test', 'HelloWorld.txt'), (err) => {
//     if (err) throw err;
//     console.log("File renames successfully");
// })