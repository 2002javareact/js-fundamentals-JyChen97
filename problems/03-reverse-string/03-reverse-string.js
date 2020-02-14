/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let reverseStr= '';
  for(let x = someStr.length-1; x >= 0; x--){
      reverseStr += someStr[x];
  }

  return reverseStr;
}