import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

test("Test ExpressJS", async ()=>{
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
});