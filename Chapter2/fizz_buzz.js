/*
Print all the numbers from 1 to 100
For numbers divisible by 3, print 'Fizz' 
For numbers divisible by 5 and not 3 print 'Buzz'
For numbers divisible by 3 and 5 print 'FizzBuzz'
*/

let fizz = 'Fizz', buzz = 'Buzz', FizzBuzz = 'FizzBuzz';

for (let counter = 1; counter < 101; counter ++) 
{
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        console.log(FizzBuzz);
    }
    else if (counter % 3 == 0) {
        console.log(fizz);
    }
    else if (counter % 5 == 0) {
        console.log(buzz);
    }
    else {
        console.log(counter);
    }
}
