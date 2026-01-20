import { writeFile } from "fs";
writeFile("output.js", 'console.log("Hello Atif")', (err) => {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("File Written Successfully");
  }
});
