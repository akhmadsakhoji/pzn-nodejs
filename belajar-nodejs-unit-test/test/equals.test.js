test("test toBe", ()=>{
    const name = "Akhmad";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Akhmad');
})

test("test toEquals", ()=>{
    let person = {id: "Akhmad"};
    Object.assign(person, {name: "Sakhoji"});

    expect(person).toEqual({id:"Akhmad", name:"Sakhoji"});
})