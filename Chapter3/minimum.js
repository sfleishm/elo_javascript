function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    }
    else if (num2 < num1) {
        return num2;
    }
    else if (num1 == num2) {
        return num1;
    }
};

console.log(min(4,4))