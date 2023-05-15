import { sumAll } from "../src/sum";

describe("when call sumAll([10, 10, 10])", ()=>{
    test("should get 30 with parameter [10, 10, 10]", ()=>{
        expect(sumAll([10,10,10])).toBe(30);
    });
    test("should get 50 with parameter [10, 10, 10, 10, 10]", ()=>{
        expect(sumAll([10,10,10,10,10])).toBe(50);
    });
});