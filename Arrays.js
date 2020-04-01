exports.Arrays = {
    data: [],

    push(data) {
        this.data.push(data)
    },

    pop() {
        this.data.pop()
    },

    remove(data) {
        if (this.data.indexOf(data) !== -1) {
            this.data.splice(this.data.indexOf(data), 1)
        } else {
            return false
        }
    },

    display() {
        return this.data
    },
}

