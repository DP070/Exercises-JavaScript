function mostRecentDate(date1, date2){
    if(date1.getTime() > date2.getTime()){
        return date1
    } else {
        return date2
    }

}