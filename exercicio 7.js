a = 0
b = 1
i = 1
while (i <= 10) {
    console.log(a)
    temp = a
    a = b
    b = temp + b
    i++
}