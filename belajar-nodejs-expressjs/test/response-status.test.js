import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    if (req.query.name) {
        res.status(200);
        res.send(`Hello ${req.query.name}`)
    } else {
        res.status(400);
        res.end()
    }
});

test("Test Response Status", async () => {
    let response = await request(app).get("/").query({name: "Akhmad"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello Akhmad");

    response = await request(app).get("/");
    expect(response.status).toBe(400);
});