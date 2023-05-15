import { sumAll } from "../src/sum";

// test('sumAl([10,10,10])',()=>{
//     expect(sumAll([10,10,10])).toBe(30);
// });
// test('sumAl([10,10,10,10,10])',()=>{
//     expect(sumAll([10,10,10,10,10])).toBe(50);
// });

const table = [
    {
        numbers:[],
        expected: 0
    },
    {
        numbers: [10],
        expected: 10
    },
    {
        numbers: [10,10,10],
        expected: 30
    },
    {
        numbers: [10,10,10,10,10],
        expected: 50
    },
    {
        numbers: [10,10,10,10,10,10,10],
        expected: 70
    }
];

test.each(table)("test sumAll($numbers) should result $expected", ({numbers, expected})=>{
    expect(sumAll(numbers)).toBe(expected);
})