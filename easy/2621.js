const sleep =  async (millis) => {
    await new Promise(resolve => setTimeout(resolve, millis))
}

console.log(sleep(1000))