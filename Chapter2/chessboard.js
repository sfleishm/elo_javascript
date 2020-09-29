let even_line   = ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'];
let odd_line    = ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];

let limit       = 8;
for (let counter = 0; counter <8; counter ++) 
{
    if (counter % 2 == 0) {
        console.log(...even_line);
    }
    else if (counter % 2 != 0) {
        console.log(...odd_line);
    }
}
1
