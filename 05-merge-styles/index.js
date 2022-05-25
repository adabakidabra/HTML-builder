const fs = require("fs");
const path = require("path");
let build = [];

const createFile = fs.createWriteStream(
  "05-merge-styles/project-dist/bundle.css"
);

fs.readdir("05-merge-styles/styles", { withFileTypes: true }, (err, data) => {
  data.forEach((el) => {
    if (el.isFile() && `${el.name.split(".")[1]}` === "css") {
      console.log(el.name.split(".")[1]);
      const file = fs.createReadStream(`05-merge-styles/styles/${el.name}`);
      file.pipe(createFile)
    }
  });
});

// fs.readdir("05-merge-styles/styles", { withFileTypes: true }, (err, data) => {
//   data.forEach((el) => {
//     if (el.isFile() && `${el.name.split(".")[1]}` === "css") {
//       const stream = fs.createReadStream(
//         path.join(__dirname,"styles",`${el.name.split(".")[0]}.${el.name.split(".")[1]}`));
//       stream.on("data", (data) => {build.push(data.toString())
//         // console.log(data.toString())
//         fs.writeFile(
//           path.join(__dirname, "project-dist/bundle.css"),build.toString(),(err) => {
//             if (err) throw err;
//           },
//           console.log(build)
//         );
//       });
//     }
//   });
// });
