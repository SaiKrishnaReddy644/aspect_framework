const ScheduledEventEmitter = require('scheduled-event-emitter');

const emitter = new ScheduledEventEmitter();
emitter.on('giveWarning', (payload) => console.log(payload));

const firstDeadline = new Date(new Date().getTime() + 5000);
emitter.scheduleEmit('giveWarning', firstDeadline, 'First warning, please fix it');


console.log(emitter.scheduledJobs)