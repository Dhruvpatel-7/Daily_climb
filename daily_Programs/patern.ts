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