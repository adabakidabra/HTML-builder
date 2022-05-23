const fs = require("fs");
const path = require("path");

function copyDir() {
  fs.mkdir("./04-copy-directory/files-copy", { recursive: true }, (err) => {
    if (err) throw err;
  });
}

fs.readdir("04-copy-directory/files", (err, data) => {
  data.forEach((el) => {
    fs.copyFile(
      `${__dirname}/files/${el}`,
      `${__dirname}/files-copy/${el}`,
      (err) => {
        if (err) throw err;
      }
    );
  });
});

copyDir();
