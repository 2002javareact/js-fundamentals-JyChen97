/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

function printDiamond(height, character){
  let eachLine = '';
  let diamond = []
  let start, end;
  let midPoint = Math.floor(height/2);

  for(let i = 0; i<=midPoint; i++){
    start =  midPoint - i;
    end = midPoint + i;

    for(let x = 0; x<height; x++){
      if(x >= start && x <= end){
        eachLine += character;
      }else{
        eachLine += ' ';
      }
    }

    
    diamond.push(eachLine)
    eachLine = '';
  }
  
  for( let i = 0; i<height; i++){

    if(i > midPoint){
      let differences = i - midPoint;
      let index = midPoint - differences;
      console.log(diamond[index]);
    } else {
      console.log(diamond[i]);
    }
  }
}

function printSquare(height, character){
  let square = '';

  for(let i = 0; i<height; i++){
    for(let x = 0; x<height; x++){
      square += character;
    }
    square += '\n';
  }

  console.log(square)
}

function printTriangle(height, character){
  let traingle = '';

  for(let i = 0; i<height; i++){
    for(let x = 0; x<=i; x++){
      traingle += character;
    }
    traingle += '\n';
  }

  console.log(traingle)
}

function printShape(shape, height, character) {
  if(shape === 'Square') {
    printSquare(height, character)
  } else if (shape === 'Triangle') {
    printTriangle(height, character)
  } else {
    printDiamond(height, character)
  }
}

printShape('Diamond', 3, '$');