function print(obj) {
    for (let key in obj){
        console.log(obj[key])
    }
}

const x = {
    name: 'Andrei',
    surname : 'Ivanov',
    age: 18,
}
const y = {
    name: 'Andrei',
    surname : 'Ivanov',
    position: 'developer',
}
print(x)
print(y)