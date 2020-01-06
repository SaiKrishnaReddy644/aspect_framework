let storage         = new Map();
let LocalStorage    = {}

LocalStorage.set = (key, value) => {
    storage.set(key, value)
}

LocalStorage.remove = (key) => {
    if (storage.has(key)) {
        storage.delete(key)
        return true
    } else {
        return false
    }
}

LocalStorage.update = (key, value) => {
    if (storage.has(key)) {
        storage.set(key, value)
        return true
    } else {
        return false
    }
}

LocalStorage.keys = () => {
    return storage.keys()
}

LocalStorage.values = () => {
    return storage.values()
}

LocalStorage.hasProperty = (key) => {
    if (storage.has(key)) {
        return true
    } else {
        return false
    }
}

LocalStorage.clear = () => {
    storage.clear()
}

LocalStorage.getEntries = () => {
    return storage.entries()
}

LocalStorage.get = (key) => {
    return storage.get(key)
}

LocalStorage.getSize = () => {
    return storage.size
}

LocalStorage.values = () => {
    return storage.values
}

module.exports      = {LocalStorage}