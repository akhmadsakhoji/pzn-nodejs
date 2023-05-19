import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";


const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    const name = req.cookies["name"];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res)=>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"});
    res.send(`Hello ${name}`);
})

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
        .set("Cookie", "name=Akhmad;author=Programmer Zaman Now");
    expect(response.text).toBe("Hello Akhmad");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
        .send({name: "Akhmad"});

    expect(response.get("Set-Cookie").toString()).toBe("Login=Akhmad; Path=/")
    expect(response.text).toBe("Hello Akhmad");
});