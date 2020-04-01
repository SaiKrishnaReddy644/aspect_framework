let console_colors = require('./utils/console_colors')
let date = require('./utils/date')
let Log = {}


Log.d = function () {

    console.log("\x1b[32m", "Log:   ", "[" + new Date().toString().split('GMT')[0].trim() + "]", "\x1b[34m", ' =======>', "\x1b[37m", arguments ? arguments.toString() : "")
}

Log.e = function () {

    console.error("\x1b[31m", "Error: ", "[" + new Date().toString().split('GMT')[0].trim() + "]", "\x1b[33m", ' =======>', "\x1b[37m", arguments ? arguments.toString() : "")
}


Log.i = function () {
    console.info("\x1b[36m", "Info:  ", "[" + new Date().toString().split('GMT')[0].trim() + "]", "\x1b[32m", ' =======>', "\x1b[37m", arguments ? arguments.toString() : "")
}

module.exports = {
    Log
}

