import { sayHello } from "../src/sayHello";

test("sayHello success", ()=>{
    expect(sayHello("Akhmad")).toBe("Hello Akhmad");
});

test.failing("sayHello error", ()=>{
    sayHello(null);
});

test("sayHello error matchers", ()=>{
    expect(()=> sayHello(null)).toThrow();
});