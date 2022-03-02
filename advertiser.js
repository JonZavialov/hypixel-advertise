const login = require('./logins.json')
let counter = 71

async function advertiser(bot){
    setTimeout(advertiser, 5000, bot)
    await bot.chat(login.message)
    await bot.chat(`/swaplobby ${counter}`)
    counter+=1
    console.log(counter)
    if(counter == 96) counter = 1
}

module.exports = advertiser