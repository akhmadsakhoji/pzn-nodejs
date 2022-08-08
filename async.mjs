function samplePromise(){
    return Promise.resolve("akhmad")
}

const name = await samplePromise()
console.info(name)
