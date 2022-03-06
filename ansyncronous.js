const fs = require("fs");
const path = require("path");

const pathOne = path.join(__dirname, "./file/one.txt");
const pathTwo = path.join(__dirname, "./file/two.txt");

//asyncronous method is also known as non-blocking method

// read a file
fs.readFile(pathOne, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Here is the file data you requested: '${data}'`);
  }
});

fs.writeFile(pathTwo, "I love coding", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("You have successfully written to a file");
  }
});

const renamePath = path.join(__dirname, "./file/five.txt");
fs.rename(pathOne, renamePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file has been rename successfully");
  }
});

// console.log("I love my indomie");
//delete a file
fs.unlink(pathOne, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("you have successfully deleted the file");
  }
});
