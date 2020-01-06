let console_colors = require('./utils/console_colors')
let date = require('./utils/date')
let Log = {}


Log.i = (data, fn) => {
    if (fn && data) {
        console.info(console_colors.BgBlue, date.getCurrentDate(), "Called the function '" + fn.name+"' ", data)
        return fn(arguments)
    } else
    if (!fn) {
        console.info(console_colors.BgBlue, date.getCurrentDate(), data)
    }
}

Log.d = (data, fn) => {
    if (fn && data) {
        console.debug(console_colors.BgGreen, date.getCurrentDate(), "Called the function " + fn.name, data)
        return fn(arguments)
    } else
    if (!fn) {
        console.debug(console_colors.BgGreen, date.getCurrentDate(), data)
    }
}

Log.e = (data, fn) => {
    if (fn && data) {
        console.error(console_colors.BgRed, date.getCurrentDate(), "Called the function " + fn.name, data)
        return fn(arguments)
    } else
    if (!fn) {
        console.error(console_colors.BgRed, date.getCurrentDate(), data)
    }
}

Log.l = (data, fn) => {
    if (fn && data) {
        console.log(console_colors.BgBlack, date.getCurrentDate(), "Called the function " + fn.name, data)
        return fn(arguments)
    } else
    if (!fn) {
        console.log(console_colors.BgBlack, date.getCurrentDate(), data)
    }
}


module.exports = {
    Log
}

