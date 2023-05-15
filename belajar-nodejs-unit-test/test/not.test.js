test("string.not", ()=>{
    const name = "Akhmad Sakhoji Jamaludin";

    expect(name).not.toBe("Diah");
    expect(name).not.toEqual("Diah");
    expect(name).not.toMatch(/diah/);
})

test("number.not", ()=>{
    const value = 2+2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
})