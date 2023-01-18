function addFunc() {
    let increment = 0
    let func = function() {
        increment += 1
        let ret = increment
        return ret
    }
    return increment
}

let increm = addFunc()
let a = increm()
let b = increm()
let c = increm()

console.log(increm, a, b, c)