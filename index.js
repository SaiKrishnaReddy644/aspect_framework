let MetaData = {}

/*
    ! Errors
    ? Debug, Info and Logs
*/

Object.assign(MetaData, require('./console'))

/*
    ? The Regular expressions validations
*/

Object.assign(MetaData, require('./validations'))

/*
    ? State Managment
*/

Object.assign(MetaData, require('./user_state'))

/*
    ? Local Storage
*/

Object.assign(MetaData,require('./localStorage'))

/*
    ? Crypter for encrypting and decrypting
*/

Object.assign(MetaData,require('./crypter'))

/*
    ? Sqlite3
*/

Object.assign(MetaData,require('./sqlite'))


module.exports = MetaData


