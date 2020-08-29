const config = require('../config.js');

module.exports = {
    name: `${config.base03}`,
    execute(message, args){
        var reponses = [
            //Text Reponses
            "Fuck you!",
            "I feel like a fucking asshole",
            "I'm actually doing alright",
            "watermelon",
            "yes",

            //Image Reponses
            {files: ["./media/images/Breaking Good 01.png"]},
            {files: ["./media/images/GRB.gif"]},
            {files: ["./media/images/Violent.png"]}
        ]
        var finalReponse = reponses[Math.floor(Math.random()*reponses.length)]
        message.channel.send(finalReponse)
    }
}