/* javascript for the Odin Project Etch-A-Sketch */
console.log('I am here');
const theGrid = document.createElement('div');

theGrid.style.color = 'blue';
theGrid.style.width = '16px';
theGrid.style.height = '16px';
theGrid.style.borderColor = 'brown';
theGrid.style.borderStyle = 'double';
theGrid.textContent = '1';
theGrid.style.fontSize = '10px';


console.log('I am here');
const theField = document.querySelector('#theBoard');
console.log(theField);
theField.appendChild(theGrid);

console.log('I am here');