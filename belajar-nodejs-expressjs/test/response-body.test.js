import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.set("Content-Type", "text/html");
    res.send(`<html><body>Hello World</body></html>`);
});

test("Test Response", async ()=>{
    const response = await request(app).get("/");
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toBe("<html><body>Hello World</body></html>");
});