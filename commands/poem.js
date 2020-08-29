const config = require('../config.js');

module.exports = {
    name: `${config.text04}`,
    execute(message, args){
        var reponses = [
            "poo, stick,\npoo on a stick,\npoo on a stick in the freezer,\npoo on a stick hard as a rock,\npoo mallet\n\npoo hitting implement,\nenchanted poo hitting implement,\nlegendary enchanted poo hitting implement",
            "penis morphs into snapping turtle head\npee pee go snap\nbite off other pee pee"
        ]
        var finalReponse = reponses[Math.floor(Math.random()*reponses.length)]
        message.channel.send(finalReponse)
    }
}