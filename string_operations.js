let StringManipulation = {}

StringManipulation.removeSpaces = (string) => {
    return string.replace(/ /g, '')
}

StringManipulation.encloseString=(string,character)=>{
    return character+string+character
}


module.exports = {
    StringManipulation
}