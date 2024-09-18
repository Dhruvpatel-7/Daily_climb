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