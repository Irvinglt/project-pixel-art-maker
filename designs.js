// Select color input
// Select size input
var changed = false;
// When size is submitted by the user, call makeGrid()
function changeColor(evt){
//    myColor = document.querySelector('#colorPicker');
    //var selected = document.querySelector('li');
    myColor = colorPicker.value;
    evt.target.style.backgroundColor = myColor;
    //console.log('box click 42');
    changed = true;
    event.preventDefault();
}

function removeAllChildNodes(inElement) {
  while(inElement.firstChild) {
    inElement.removeChild(inElement.firstChild);
  }
}
function makeGrid() {

// Your code goes here!
  myTable = document.querySelector('#pixelCanvas');
  if (changed){
//    divRemove = myTable.querySelector('div');
//    myTable.removeChild(divRemove);
      removeAllChildNodes(myTable);
  }

  for (var row = 1; row<= inputWidth.value; row++) {
    newDiv = document.createElement('div');
    myTable.appendChild(newDiv);
    newRow = document.createElement('ul');
    newDiv.appendChild(newRow);
    myTable
    for (var column = 1; column<=inputHeight.value; column++) {
          newCell = document.createElement('li');
          newRow.appendChild(newCell);
    }
//    myBreak = document.createElement('br');
//    myTable.appendChild(myBreak);
  }
  event.preventDefault();
  changed = true;
}
mySubmit = document.querySelector('input[type="submit"]');
mySubmit.addEventListener('click',makeGrid);
//makeGrid();


myTable = document.querySelector('#pixelCanvas');
myTable.addEventListener('click',changeColor,false);
