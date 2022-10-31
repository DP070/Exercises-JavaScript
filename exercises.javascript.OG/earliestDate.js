function earliestDate(dates) {
    let lower = dates[0]
    for (let i = 0; i <= dates.length; i++) {
        if (dates[i] < lower) {
            lower = dates[i]
        }
    }
    return lower

}