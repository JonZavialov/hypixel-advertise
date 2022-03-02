const mineflayer = require('mineflayer')

const login = require('./logins.json')
const discordBot = require('./discordBot')
const advertiser = require('./advertiser')

let bot
bot = mineflayer.createBot({
    host: login.host,
    port: login.port,
    username: login.user,
    password: login.pass,
    auth: 'microsoft'
})

bot.once('spawn', () => {
    runner(bot)
})

async function runner(bot){ 
    discordBot(bot)
    advertiser(bot)

    bot.on('kicked', (reason, loggedin) => {
        console.log('kicked for ' + reason)
    })

    bot.on('message', async message => {
        console.log(message.toString())
    })
}