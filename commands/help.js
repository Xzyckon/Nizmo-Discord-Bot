const config = require('../config.js');

module.exports = {
    name: `${config.base01}`,
    execute(message, args){
        message.channel.send([
            `**Prefix:** ${config.prefix}\n`,

            '__Basic Commands__',
            `${config.base01}: ${config.base01info}`,
            `${config.base02}: ${config.base02info}`,
            `${config.base03}: ${config.base03info}\n`,

            '__Media Commands__',
            `~~${config.media01}: ${config.media01info}~~ (To be added in a later update)`,
            `~~${config.media02}: ${config.media02info}~~ (To be added in a later update)`,
            `~~${config.media03}: ${config.media03info}~~ (To be added in a later update)`,
            `~~${config.media04}: ${config.media04info}~~ (To be added in a later update)\n`,

            '__Text Commands__',
            `${config.text01}: ${config.text01info}`,
            `${config.text02}: ${config.text02info}`,
            `${config.text03}: ${config.text03info}`,
            `${config.text04}: ${config.text04info}`,
            `~~${config.text05}: ${config.text05info}~~ (To be added in a later update)`,
            `${config.text06}: ${config.text06info}`,
            `~~${config.text07}: ${config.text07info}~~ (To be added in a later update)`,
            `~~${config.text08}: ${config.text08info}~~ (To be added in a later update)`
        ])
    }
}