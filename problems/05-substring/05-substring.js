/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let subStr = '';
    if(someStr.length < endIndex || someStr.length < startIndex || startIndex > endIndex) {
        throw new Error ('input was incorrect');
    }else if ( someStr.length === 0) {
        return '';
    }

    for(let i = startIndex; i < endIndex; i++){
        subStr += someStr[i];
    }

    return subStr;
}