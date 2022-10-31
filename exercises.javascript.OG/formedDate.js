function formedDate(date) {
    const DAY = String(date.getDate()).padStart(2, '0')
    const MONTH = String(data.getMonth() + 1).padStart(2, '0')
    let year = date.getFullYear()
    return MONTH + "-" + DAY + "-" + year // MM-DD-YYYY

}