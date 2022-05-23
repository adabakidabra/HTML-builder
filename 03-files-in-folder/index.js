const fs = require("fs");
const path = require("path");

fs.readdir(
  "03-files-in-folder/secret-folder",
  { withFileTypes: true },
  (err, data) => {
    data.forEach((el) => {
      if (!el.isDirectory()) {
        fs.stat(`${__dirname}/secret-folder/${el.name}`, (err, data) => {
          console.log(
            `${el.name.split(".")[0]}-${el.name.split(".")[1]}-${data.size}bit`
          );
        });
      }
    });
  }
);
