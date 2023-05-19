import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app).get("/").query({ name: "Akhmad" });
    expect(response.text).toBe("Hello Akhmad");
});