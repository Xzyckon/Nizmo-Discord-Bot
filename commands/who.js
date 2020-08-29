const config = require('../config.js');

module.exports = {
    name: `${config.base02}`,
    execute(message, args){
        var reponses = [
            "Hi, my name is Nizmo. I like shitposting. I... really like shitposting. There's just something about it I like their text, their audio, their... phonetic rythm. I like to spam the n word and everyone tag. I like it when they get offended as I burn down every channel. Feeling the heat of the flames raging within a broken server around me and hearing the screams of a thousand trapped souls. I like- Oh I'm sorry, I got myself all worked up. Would you like to help me start?"
        ]
        var finalReponse = reponses[Math.floor(Math.random()*reponses.length)]
        message.channel.send(finalReponse)
    }
}