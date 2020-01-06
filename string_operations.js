let StringManipulation = {}

StringManipulation.removeSpaces = (string) => {
    return string.replace(/ /g, '')
}

StringManipulation.encloseBetweenString=(string,character)=>{
    return character+string+character
}


module.exports = {
    StringManipulation
}