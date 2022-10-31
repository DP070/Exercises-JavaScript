function daysSubtract(date, day) {
    let a = day * 86400000 //
    let dates = new Date(date.valueOf() - a)
    return dates

}