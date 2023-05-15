import { sum } from "../src/sum";

beforeAll(async ()=>{
    console.log("Before All");
});

afterAll(async ()=>{
    console.log("After All");
});

beforeEach(async ()=>{
    console.log("Before Each");
})

afterEach(async ()=>{
    console.log("After Each");
})

test("first test", async ()=>{
    expect(sum(10, 10)).toBe(20);
    console.log("First Test");
})
test("second test", async ()=>{
    expect(sum(10, 10)).toBe(20);
    console.log("Second Test");
})