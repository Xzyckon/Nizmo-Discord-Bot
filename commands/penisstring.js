const config = require('../config.js');
const {vocabB,vocabC} = require('../config.js');

module.exports = {
    name: `${config.text02}`,
    execute(message, args){
        var finalReponse = ('penis ' + vocabB[Math.floor(Math.random()*vocabB.length)] + ' ' + vocabC[Math.floor(Math.random()*vocabC.length)])
        message.channel.send(finalReponse)
    }
}