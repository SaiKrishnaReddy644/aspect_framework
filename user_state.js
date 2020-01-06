let UserState   = {}
let state       = {}

UserState.initState = (id) => {
    state[id]   = {}
}

UserState.getState = (id) => {
    return state[id]
}

UserState.setState = (id,user) =>{
    state[id]   = user
}

module.exports = {
    UserState
}
