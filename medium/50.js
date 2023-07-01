function power(x, n) {
    // If n is 0, return 1.
    if (n === 0) {
        return 1;
    }
    // If n is negative, return the reciprocal of x raised to the power of -n.
    else if (n < 0) {
        return 1 / power(x, -n);
    }
    // If n is even, recursively calculate the power of x to n / 2 and multiply the result by itself.
    else if (n % 2 === 0) {
        const y = power(x, n / 2);
        return y * y;
    }
    // If n is odd, recursively calculate the power of x to n - 1 and multiply the result by x.
    else {
        return x * power(x, n - 1);
    }
}