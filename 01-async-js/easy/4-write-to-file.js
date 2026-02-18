// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

console.log("start");

fs.writeFile("output.txt", "Hello Mayur!", function (err) {
  if (err) {
    console.log("error writing file");
  } else {
    console.log("file written successfully");
  }
});

console.log("end");
