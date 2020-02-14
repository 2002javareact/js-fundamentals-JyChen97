/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let x in someObj){
        console.log(`${x}: ${someObj[x]}`)
    }
}