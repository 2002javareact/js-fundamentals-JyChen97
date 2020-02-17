/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let binary = (someNum >>> 0).toString(2)
    return binary[binary.length -1] === "0"
}