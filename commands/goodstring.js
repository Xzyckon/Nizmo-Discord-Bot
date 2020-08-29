const config = require('../config.js');

module.exports = {
    name: `${config.text03}`,
    execute(message, args){
        var reponses = [
            "autonomous lawnmower surgery",
            "comatose hentai robot",
            "dick slicing pact",
            "enigmatic cum event",
            "liquid fart transfusion",
            "lucid rape therapy",
            "penis faggot underground",
            "penis hentai revolution",
            "yeti poo bananas"
        ]
        var finalReponse = reponses[Math.floor(Math.random()*reponses.length)]
        message.channel.send(finalReponse)
    }
}