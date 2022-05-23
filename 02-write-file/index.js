const { stdin, stdout } = require("process");
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const ws = fs.createWriteStream(`${__dirname}/text.txt`);
const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Добро пожаловать на платформу исполнения желаний!\nЗагадайте желание:"
);

io.on("SIGINT", function () {
  console.log("нет так нет");
  console.log("Bye-bye");
  io.close();
});

io.on("line", (line) => {
  if (line === "exit") {
    io.close();
    console.log("нет так нет");
    console.log("Bye-bye!");
  } else {
    ws.write(`${line}` + `\n`);
    console.log("Желаете еще что-нибудь?");
  }
});