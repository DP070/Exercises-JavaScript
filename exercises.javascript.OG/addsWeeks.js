function addsWeeks(date, week){
    let a = week * 604800000
    let dates = new Date(date.valueOf() + a)
    return dates

}