import util from "util";

const name = "Akhmad";
const firstName = "Akhmad";
const lastName = "Jamaludin";

console.info(`Hello ${name}`);
console.info(util.format("Hello %s", name));

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {firstName: firstName, lastName: lastName};
console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
