const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
OTAxMTQ2NTQ5NDU3OTQwNTAw.YXLoHw.H-t2vjoLYcK_GDdHPYljOBqrpwk    prefix: "$getServerVar[prefix]", // Prefix
    mobile: true // Mobile presence
})

bot.onMessage() // Initial Command line

bot.loadCommands('./commands')

bot.readyCommand({
    channel: "", // Message Channel
    code: `$log[Uruchomiono! Zalogowano jako $userTag[$clientID]]
    $channelSendMessage[882659343391158282; jestem debilem i informuje ze jestem wlaczony.!;no]` // Message
})

bot.variables({
   prefix: "*",
   rank: "User",
   ideach: "0" 
})

bot.botJoinCommand({
    channel: "",
    code: `$channelSendMessage[882942379684933669;
    Nazwa: $serverName[$guildID]
    ID: $guildID
    ID Właściciela: $ownerName]`
    })

    bot.botLeaveCommand({
        channel: "882942379684933670",
        code: `$channelSendMessage[882942379684933669;
            Nazwa: $serverName[$guildID]
            ID: $guildID
            ID Właściciela: $ownerName;no]`
        })
