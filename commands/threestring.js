const config = require('../config.js');
const {vocabA,vocabB,vocabC} = require('../config.js');

module.exports = {
    name: `${config.text01}`,
    execute(message, args){
        var finalReponse = (vocabA[Math.floor(Math.random()*vocabA.length)] + ' ' + vocabB[Math.floor(Math.random()*vocabB.length)] + ' ' + vocabC[Math.floor(Math.random()*vocabC.length)])
        message.channel.send(finalReponse)
    }
}