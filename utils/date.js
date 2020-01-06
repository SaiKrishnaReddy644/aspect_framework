exports.getCurrentDate = () => {
    var date = new Date()
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
    return date
}