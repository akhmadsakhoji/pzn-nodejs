const buffer = Buffer.from("Akhmad Sakhoji Jamaludin", "utf8");

console.info((buffer.toString()));
console.info((buffer.toString("base64")));
console.info((buffer.toString("hex")));

const bufferBase64 = Buffer.from("QWtobWFkIFNha2hvamkgSmFtYWx1ZGlu", "base64")
console.info((bufferBase64.toString("utf8")));