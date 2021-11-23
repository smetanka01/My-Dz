// Треугольник в цикле

let j = "*"
while (j.length <= 7){
    console.log(j);
    j += "*";
}

// FizzBuzz

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if(i % 3 === 0){
        console.log('Fizz')
    } else if(i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


// Шахматная Доска

function chessBoard() {
    const limit = 8
    let result = ""
    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            if (i % 2 === 0){
                result += j % 2 === 0 ? '# ' : ''
            } else {
                result += j % 2 === 0 ? ' ' : '#'
            }
        }
        result += '\n'
    }
    return result
}

console.log(chessBoard())