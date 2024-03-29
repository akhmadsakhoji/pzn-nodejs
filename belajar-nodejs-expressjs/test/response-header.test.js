import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set({
        "X-Powered-By": "Programmer Zaman Now",
        "X-Author": "Akhmad"
    });
    res.send(`Hello Response`);
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
    expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
    expect(response.get("X-Author")).toBe("Akhmad");
});