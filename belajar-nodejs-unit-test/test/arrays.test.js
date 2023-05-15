test("array simple", ()=>{
    const names = ["Akhmad", "Sakhoji", "Jamaludin"];
    expect(names).toEqual(["Akhmad", "Sakhoji", "Jamaludin"]);
    expect(names).toContain("Akhmad");
});

test('array object', () => {
    const persons = [
        {
            name: "Akhmad"
        },
        {
            name: "Jamal"
        }
    ];
    expect(persons).toContainEqual({
        name: "Akhmad"
    });
});