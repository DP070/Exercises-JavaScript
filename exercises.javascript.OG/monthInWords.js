function monthInWords(date) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "Semptember", "Octuber", "November", "December"]
    d = date.getMonth()
    switch (d) {
        case 0:
            return month[0]
        case 1:
            return month[1]
        case 2:
            return month[2]
        case 3:
            return month[3]
        case 4:
            return month[4]
        case 5:
            return month[5]
        case 6:
            return month[6]
        case 7:
            return month[7]
        case 8:
            return month[8]
        case 9:
            return month[9]
        case 10:
            return month[10]
        case 11:
            return month[11]
    }
}