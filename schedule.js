let EventEmitter = require('events').EventEmitter
let event = new EventEmitter()

let timer = {
    day: 1000 * 60 * 1440,
    week: 1000 * 60 * 1440 * 7,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    seconds: 1000
}

let timeconstants = {
    "every minute": timer.minute,
    "every day": timer.day,
    "every 5 minutes": timer.minute * 5,
    "every 10 minutes": timer.minute * 10,
    "every 15 minutes": timer.minute * 15,
    "every 30 minutes": timer.minute * 30,
    "every hour": timer.hour,
    "every week": timer.week,
}


exports.scheduler = (time, name, handler) => {
    let currenttime = new Date().getTime()
    if (timeconstants[time]) {
        time = currenttime + timeconstants[time]
    }
    event.on(name, handler)
    setInterval(() => {
        event.emit(name)
    }, time - currenttime)
}

exports.scheduleOnce = (time, name, handler) => {
    let currenttime = new Date().getTime()
    if (timeconstants[time]) {
        time = currenttime + timeconstants[time]
    }
    event.on(name, handler)
    setTimeout(() => {
        event.emit(name)
    }, time - currenttime)
}


