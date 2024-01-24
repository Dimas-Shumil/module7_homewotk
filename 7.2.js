function hasAttribute(obj, attribute){
    return attribute in obj;
}
const object = {
    name: 'Andrei',
    surname : 'Ivanov',
    age: 25,
}
let text = "position"

let res = hasAttribute(object, text)
console.log(res)
let res2 = hasAttribute(object, "name")
console.log(res2)