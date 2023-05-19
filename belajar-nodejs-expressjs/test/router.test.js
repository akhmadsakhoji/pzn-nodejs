import express from "express";
import request from "supertest";

const app = express();
const port = 3000;
const router = express.Router();

router.use((req, res, next)=>{
    console.log(`Receive request: ${req.originalUrl}`);
    next();
});
router.get('/feature/a', (req, res)=>{
    res.send("feature a");
})


test("Test Router Disabled", async () => {
    let response = await request(app).get("/feature/a");
    expect(response.status).toBe(404);
});

test("Test Router Enabled", async()=>{
    app.use(router);

    const response = await request(app).get("/feature/a");
    expect(response.text).toBe("feature a");
});