/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  if(someStr.length <= 1) return true;
  let lowerCaseStr = someStr.toLowerCase()

  let strLength = lowerCaseStr.length;
  for( let i = 0; i<strLength; i++){
      if(lowerCaseStr[i] !== lowerCaseStr[strLength-1-i]) return false;
  }

  return true;
}

console.log(isPalindrome('MAdam'))