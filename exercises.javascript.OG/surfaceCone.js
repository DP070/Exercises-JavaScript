function surfaceCone(radius, height) {
    x = Math.PI * radius ** 2
    g = Math.hypot(radius, height)
    return (g * Math.PI * radius) + x

}