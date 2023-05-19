import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";


const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser("CONTOHRAHASIA"));

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res)=>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed: true});
    res.send(`Hello ${name}`);
})

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
        .set("Cookie", 'Login=s%3AAkhmad.5YvGG8n3pARlyzFf5bWJVCSrFSqPXJWQy30Jxmg5lq4; Path=/');
    expect(response.text).toBe("Hello Akhmad");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
        .send({name: "Akhmad"});

    console.log(response.get("Set-Cookie"));
    expect(response.get("Set-Cookie").toString()).toContain("Akhmad");
    expect(response.text).toBe("Hello Akhmad");
});