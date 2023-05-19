import express from "express";
import request from "supertest";


const logger = (req, res, next)=>{
    console.log(`Receive request: ${req.method} ${req.originalUrl}`);
    next();
}
const addPoweredHeader = (req, res, next)=>{
    res.set("X-Powered-By", "Programmer Zaman Now");
    next();
}
const apiKeyMiddleware = (req, res, next)=>{
    if(req.query.apiKey){
        next();
    } else {
        res.status(401).end();
    }
}
const requestTimeMiddleware = (req, res, next)=>{
    req.requestTime = Date.now();
    next();
}
const app = express();
const port = 3000;


app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send(`Hello Response`);
});
app.get('/akhmad', (req, res) => {
    res.send(`Hello Akhmad`);
});
app.get('/time', (req,res)=>{
    res.send(`Hello, Today Is ${req.requestTime}`);
});

test("Test Response Middleware", async () => {
    const response = await request(app).get("/").query({apiKey: "123"});
    expect(response.get("X-Powered-By", "Programmer Zaman Now"));
    expect(response.text).toBe("Hello Response");
});
test("Test Response Middleware 2", async () => {
    const response = await request(app).get("/akhmad").query({apiKey: "123"});
    expect(response.get("X-Powered-By", "Programmer Zaman Now"));
    expect(response.text).toBe("Hello Akhmad");
});
test("Test Response Middleware Unauthorized", async () => {
    const response = await request(app).get("/akhmad");
    expect(response.status).toBe(401);
});

test("Test Response Middleware Time", async () => {
    const response = await request(app).get("/Time").query({apiKey: "123"});
    expect(response.get("X-Powered-By", "Programmer Zaman Now"));
    expect(response.text).toContain("Hello, Today Is");
});