function dateInWords(date) {
    let weekDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let Months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december"]
    let week = weekDay[date.getDay()]
    let day = date.getDay
    let month = Months[date.getMonth()]
    let year = date.getFullYear
    return `${week}, ${day}, ${month}, ${year}`
}