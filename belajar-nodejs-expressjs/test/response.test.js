import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello Response`);
});

test("Test Response", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
});