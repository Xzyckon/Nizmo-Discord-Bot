const config = require('../config.js');

module.exports = {
    name: `${config.text06}`,
    execute(message, args){
        var reponses = [
            "Asking stupid questions like that is going to get you into trouble",
            "I don't know",
            "The apple economy is a myth, shut up",
            "The last time I gave a shit I got fucked!",
            "The price of apples is currently: bububububu",
            "What the fuck is an apple?"
        ]
        var finalReponse = reponses[Math.floor(Math.random()*reponses.length)]
        message.channel.send(finalReponse)
    }
}