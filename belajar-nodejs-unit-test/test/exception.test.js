import { MyException, callMe } from "../src/exception"

test("exception", ()=>{
    expect(() => callMe("Akhmad")).toThrow();
    expect(() => callMe("Akhmad")).toThrow(MyException);
    expect(() => callMe("Akhmad")).toThrow("Ups my exceptions happens");
})

test("exception not happens",()=>{
    expect(callMe("Sakhoji")).toBe("OK");
})