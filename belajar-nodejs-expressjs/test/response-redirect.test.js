import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.set("Content-Type", "text/html");
    res.redirect('/to-next-page');
});

test("Test Response", async ()=>{
    const response = await request(app).get("/");
    expect(response.status).toBe(302);
    expect(response.get('location')).toBe('/to-next-page');
});