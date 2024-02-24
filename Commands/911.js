const fs = require('fs');
let config = {};

if (fs.existsSync('config.json')) {
    config = JSON.parse(fs.readFileSync('config.json'));
}

module.exports = {
    description: 'https://appembed.netlify.app/e?t=&c=%23FF0000&a=VAR911&d=Type%20VAR911%20to%20get%20a%20gif%20of%20911%20lmao&p=TonyskalYTs%20selfbot&i=&ic=',
    run: async (client, message, handler, prefix, MyID) => {
        try {
            message.edit(`${config.longstringoftext} https://appembed.netlify.app/e?color=%23FF0000&author=L%20%2B%20Bozo&image=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F1160761272405602435%2F1190487199314092122%2F911.gif`);
        } catch (err) {
            return void(0);
        }
    }
}