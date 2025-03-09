var x = 104, s
if (x <= 50) {
    s = 1.678 * x
} else {
    s = 50 * 1.678
    x = x - 50

    if (x <= 50) {
        s = s + 1.734 * x
    } else {
        s = s + 50 *1.734
        x = x - 50
    }
}