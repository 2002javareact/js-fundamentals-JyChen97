/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let arr = [];
  for( let i = 0; i<index; i++){
      arr.push(someArr[i]);
  }
  return arr;
}