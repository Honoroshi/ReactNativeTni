/*function avg(...args) { //split operator
    let sum = 0
    for (const item of args) {
        sum += item
    }
    return sum / args.length
}Java Programming

console.log(avg(2, 3, 4, 5))*/

let avg = (...args) => {
    let sum = 0
    for (const item of args) {
        sum += item
    }
    console.log(sum / args.length)
}
avg(2,3,4,5)