import { sayHelloAsync } from "../src/async.js";

test("test async function", async()=>{
    const result = await sayHelloAsync("Akhmad");
    expect(result).toBe("Hello Akhmad");
});

test("test async matchers", async()=>{
    await expect(sayHelloAsync("Akhmad")).resolves.toBe("Hello Akhmad");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
    
});