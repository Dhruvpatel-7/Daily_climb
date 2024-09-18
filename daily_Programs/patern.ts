function printAsteriskPattern(rows: number, columns: number): void {
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j < columns; j++) {
            line += '4';
        }
        console.log(line);
    }
}
printAsteriskPattern(4, 4);

function triangle(rows:number){
    for(let i = 1; i <= rows; i++){
        let line = '';
        for(let j = 1; j <= i; j++){
            line += "*"
        }
        console.log(line);
    }
}
triangle(4)

function numbertriangle(rows:number){
    for(let i= 1; i <= rows; i++){
        let line = "";
        for(let j =1; j <= i; j++){
            line += i;
        }
        console.log(line)
    }
}
numbertriangle(9)

function printLetterTriangle(rows: number): void {
    let Alphabate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) { 
            // line += Alphabate[i + j];
            line += String.fromCharCode(65 + i + j)
        }
        console.log(line);
    }
}
printLetterTriangle(5);

function printLetterTriangle1(rows: number): void {
    const startChar = 'E'.charCodeAt(0);
    for (let i = 0; i < rows; i++) { 
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += String.fromCharCode(startChar - i + j);
        }
        console.log(line);
    }
}
printLetterTriangle1(5);

function printnumber(rows: number){
    for(let i = rows; i >= 1; i--){
        let line="";
        for(let j = 1; j<= i; j++){
            line += i;
        }
        console.log(line)
    }
}
printnumber(5)

function printRightAlignedNumberTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let line = '';

        for (let j = 0; j < rows - i; j++) {
            line += ' ';
        }
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        console.log(line);
    }
}
printRightAlignedNumberTriangle(4);

function printNumberDiamondTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 0; j < rows - i; j++) {
            line += ' ';
        }
        for (let j = i; j < 2 * i; j++) {
            line += j;
        }
        for (let j = 2 * i - 2; j >= i; j--) {
            line += j;
        }
        console.log(line);
    }
}
printNumberDiamondTriangle(6);