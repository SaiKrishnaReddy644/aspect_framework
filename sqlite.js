let DataBase = {}
let sqlite = require('sqlite3').verbose();
let db=null
let questionMark = '?'
let fs = require('fs')
let path = require('path')

DataBase.createDataBase=(dir,databaseName)=>{
    if(db===null){
        db=new sqlite.Database(path.join(dir,databaseName));
        return true
    }else{
        return false
    }
}

DataBase.createTable = (tableName, values) => {
    try {
        db.serialize(() => {
            let fields = ''
            values.forEach((item, i) => {
                if (i < values.length - 1) {
                    fields = fields + item.replace(/,/g, ' ') + '@'
                } else {
                    fields = fields + item.replace( /,/g, ' ')
                }
            });
            db.run(`CREATE TABLE ${tableName} (${fields.replace(/@/g,', ')})`)
        })
        return true
    } catch (e) {
        console.log(e.message)
        return false
    }
}

DataBase.listTables = () => {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            db.all("select name from sqlite_master where type='table'", function (err, tables) {
                if(err){
                    console.log(err)
                }
                resolve(tables)
                return tables
            });
        });
    })
}


DataBase.insert = (tableName, values) => {
    let statment = db.prepare(`INSERT INTO ${tableName} values (${questionMark.repeat(values[0].length).split('').join(',').toString()})`);
    values.forEach(item => {
        statment.run(...item)
    })
    statment.finalize(err => {
        if (err) {
            console.log(err)
            return false
        }else{
            return true
        }
    })
}


DataBase.findAll = (tableName) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
            if (err !== null) {
                resolve(undefined)
                return undefined
            } else {
                resolve(rows)
                return rows
            }
        })
    })
}

DataBase.find = (tableName, condition) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${tableName} where ${condition}`, (err, rows) => {
            if (err !== null) {
                resolve(undefined)
                return undefined
            } else {
                resolve(rows)
                return rows
            }
        })
    })
}

DataBase.deleteDataBase = (databaseName) => {
    fs.unlink(databaseName,(err)=>{
        if(err){
            console.log(err)
            return false
        }else{
            db=null
            return true
        }
    })
}

DataBase.update= (tableName,referField,fieldName,referValue,newValue) =>{
    if(typeof newValue==='string'){
        newValue='"'+newValue+'"'
    }
    if(typeof referValue==='string'){
        newValue='"'+referValue+'"'
    }
    console.log(`UPDATE ${tableName} SET ${fieldName}=${newValue} WHERE ${referField}=${referValue}`)
    db.run(`UPDATE ${tableName} SET ${fieldName}=${newValue} WHERE ${referField}=${referValue}`,(err)=>{
        console.log(err)
        if(err){
            return false
        }else{
            return true
        }
    })
}

DataBase.closeDatabase = () => {
    db.close()
    return true
}
