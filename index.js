// Write your code here!

//no longer has DOM node 'main#main'
document.querySelector('main#main').remove();

//has a 'newHeader' variable that points to an <h1> node, 'h1#victory'
const newHeader = document.createElement('h1');

//the 'newHeader' variable points to a node that has an id of 'victory'
newHeader.id = 'victory';

//the 'newHeader' variable points to a node 'h1#victory', has "YOUR-NAME is the champion" inside
newHeader.textContent = 'Win Feigle is the champion';

//Append to document
document.body.append(newHeader);
