let MetaData = {}

/*
    ! Errors
    ? Debug, Info and Logs
*/

Object.assign(MetaData, require('./console'))

/*
    ? State Managment
*/

Object.assign(MetaData, require('./user_state'))

/*
    ? Local Storage
*/

Object.assign(MetaData, require('./localStorage'))

/*
    ? Crypter for encrypting and decrypting
*/

Object.assign(MetaData, require('./crypter'))

/*
    ? Sqlite3
*/

Object.assign(MetaData, require('./sqlite'))

/*
   ? Arrays
*/

// @ts-ignore
Object.assign(MetaData, require('./Arrays'))

/*
   ? BTree
*/

Object.assign(MetaData, require('./datastructures/BTree.js'))

module.exports = MetaData