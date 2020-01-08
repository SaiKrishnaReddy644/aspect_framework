class Arrays {
    constructor() {
        this.length = 0
        this.data = {}
    }

    append(data) {
        this.data[this.length] = data
        this.length++
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--;
    }

    remove(data) {
        if (this.data[Object.values(this.data).indexOf(data)]) {
            delete this.data[Object.values(this.data).indexOf(data)]
            this.length--
        } else {
            return false
        }
    }

    display(){
        return Object.values(this.data)
    }

}


