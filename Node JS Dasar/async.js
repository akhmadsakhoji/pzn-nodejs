function samplePromise() {
    return Promise.resolve("akhmad");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();
