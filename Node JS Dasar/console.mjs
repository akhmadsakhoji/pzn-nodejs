import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info("Hello World");
log.error("Ups");

const person = {
    firstName: "Akhmad",
    lastName: "Jamaludin"
}

log.table(person);
