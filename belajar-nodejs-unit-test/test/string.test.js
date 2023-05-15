test("string", ()=>{
    const name = "Akhmad Sakhoji Jamaludin";

    expect(name).toBe("Akhmad Sakhoji Jamaludin");
    expect(name).toMatch(/oji/);
})