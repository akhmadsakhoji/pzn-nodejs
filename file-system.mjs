// cara 1
// import fs from "fs"
// const buffer = fs.readFileSync("file-system.mjs")
// console.info(buffer.toString());
// fs.writeFileSync("temp.txt", "Hello World")

// cara 2
import fs from "fs/promises"
const buffer = await fs.readFile("temp.txt")
console.info(buffer.toString());

// await fs.writeFileSync("temp.txt", "Hello World")

