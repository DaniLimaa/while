
function isPrime(num) {
    if (num <= 1) 
    if (num === 2) 
    if (num % 2 === 0)

    var i = 3
    while (i * i <= num) {
        if (num % i === 0)
        i += 2;
    }

    return true;
}