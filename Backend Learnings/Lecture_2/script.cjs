const fs = require("fs");
const http = require("http");

// // writefile
// fs.writeFile("output.txt", "Hello, World!", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });

// // appendfile
// fs.appendFile("output.txt", "\nHii world its me!", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });

// // rename
// fs.rename("output.txt", "new_output.txt", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was renamed!");
// });

// // copy file
// fs.copyFile("new_output.txt", "copy_output.txt", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was copied!");
// });

// // unlink
// fs.unlink("copy_output.txt", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was deleted!");
// });

// // rm
// fs.rm("./copy", { recursive: true }, function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The directory was deleted!");
// });

const server = http.createServer(function (req, res) {
  res.end("Hello, World!");
});

server.listen(3000);
