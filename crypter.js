var CryptoJS    = require("crypto-js");
const Crypter   = {}

Crypter.encrypt = (payload, key) => {

    if (typeof payload === 'object') {
        return CryptoJS.AES.encrypt(JSON.stringify(payload), key).toString();
    } else {
        return CryptoJS.AES.encrypt(payload, key).toString();
    }
}

Crypter.decrypt = (key, token) => {
    var bytes   = CryptoJS.AES.decrypt(token.toString(), key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports  = {Crypter}
