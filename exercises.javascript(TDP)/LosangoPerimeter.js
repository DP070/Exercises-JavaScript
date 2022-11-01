function LosangoPerimeter(majorDiagonal, minorDiagonal){
let a = majorDiagonal / 2
let b = minorDiagonal / 2
let x = 0

x = Math.hypot(a, b)

return x * 4
}

