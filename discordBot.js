const discord = require('discord.js')
const login = require('./logins.json')

async function discordBot(bot){
    const discordBot = new discord.Client()
    const token = login.disc
    await discordBot.login(token)

    const chatBridgeMessageChannel = await discordBot.channels.fetch(login.channel)

    bot.on('message', async message => {
        if(message.toString().length < 1) return
        message = message.toString().replace('@',"")
        await chatBridgeMessageChannel.send(message.toString())
        .catch(err => {
        })
    })
}

module.exports = discordBot