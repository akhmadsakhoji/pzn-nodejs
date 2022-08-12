import https from "https";

const endpoint = "https://hookb.in/1gZQ0qpl2pudW2ndy6Bj";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data)=>{
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Akhmad",
    lastName: "Jamaludin",
})

request.write(body);
request.end();