let { Hi } = require("./test");
const fs = require("fs-extra");

// 哈喽
function Hello() {
  console.log("Hello " + Hi());
  fs.writeFile("123.txt",'123')
}

Hello();
