//FUNZIONE CHE CREA QUADRATI ALL'INTERNO DELLA GRID
function squareElem(){
    let square = document.createElement('div');
    square.classList.add('square')
    return square;
}

//COLLEGAMENTO GRID NEL DOM
const grid = document.getElementById('grid');

//CICLO PER CREARE LA TABELLA
for(let i=0; i<100; i++){
    let square = squareElem();
    grid.append(square);
}