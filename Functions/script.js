//Functions - performs specific task
//            can be called multiple times
//            optionally takes input as 
//            parameters and optionally
//            returns value

//function declaration
function isPositive(num){//parameter
    return num>0
}

console.log(isPositive(-4))//argument

function sayHello(){
    console.log('hello')
}

sayHello()
//hoisting
// JavaScript Hoisting refers to the 
// process whereby the interpreter appears
// to move the declaration of functions, 
// variables or classes to the top of their
// scope, prior to execution of the code
console.log(findProduct(4,7)) 

function findProduct(a,b){
    return a*b
}


console.log(findProduct)
console.log(typeof findProduct)

//default parameters
// function greet(name='there'){
//     console.log('hi',name)
// }

// greet('Ram')
// greet()

//recursion - function calling itself
//factorial - product of first n numbers
//5! = 5*4*3*2*1 = 5*4*3*2*1
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

//function expression
//assigned to a variable as object
let a = 100

let isEven = function(num){
    return num%2==0
}
console.log(isEven(5))
console.log(isEven)

let arr = [ 2, 3, 5, 6, 10]
let findSum = function(arr){
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}

console.log(findSum(arr))

// let volume = function(l,b,h){
//     return l*b*h
// }

//arrow function
let volume = (l,b,h) => l*b*h
console.log(volume(7,8,9))

let sumOfArr = arr =>{
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(sumOfArr(arr))

//area of circle
let area = r => Math.PI*r*r
console.log(area(5))

console.clear()
//variable arguments - rest parameters
let prod = function(...args){
    let result = 1
    for(let val of args)
        result *= val
    return result 
}

let prod2 = function(){
    let result = 1
    for(i=0;i<arguments.length;i++)
      result *= arguments[i]
    return result 

}

console.log(prod2(7,6,5,4))

//Generators - generates value one by one

function* indexGenerator(){
    let index = 1
    while(true){
        yield index++
    }
}

const gen = indexGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.clear()

//callback - Function passed as argument

function greetConsole(name){
    console.log('hello',name)
}

function greetHeading(name){
    const heading = document.querySelector('h1')
    heading.innerHTML = 'hello ' + name
}

function greet(callback){
    console.log(callback)
    callback('Ram')
}

greet(greetConsole)
// greet(greetHeading)


greet(name => {
    const heading = document.querySelector('h1')
    heading.innerHTML = 'hello ' + name
})
console.clear()


//Foreach
arr = ['deepa','suresh','ramya']

arr.forEach(print)

function print(val){
    console.log(val.toUpperCase())
}

arr.forEach(val => console.log(val.toUpperCase()))
console.log(arr)

arr.forEach((val,index,arr)=>{
    arr[index] = val.toUpperCase()
})

console.log(arr)

arr = ['ECE', 'IT', 'CSC', 'EEE']

arr.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
});

console.clear()


//map - executes callback for each array
//      element and returns new array
let priceUSD = [20,35,13]
let priceINR = priceUSD.map(x => x *83)
console.log(priceINR)

priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}

console.log(priceINR)

const input = [ //array of objects
            {name:'John',age:15},
            {name:'Radha',age:45},
            {name:'Kaushik',age:12},
            {name:'Anu',age:21},
            {name:'Divya',age:26}
              ]

const ages = input.map( x => x.age)
console.log(ages)


//filter - returns new array by checking
//        each value of original arr using
//        call back fn

let cost = [35,234,12,34,54,123]

let lessThan100 = cost.filter( x => x<100)
console.log(lessThan100)

//reduce - executes reducer callback
//       and returns accumulated result
//arr.reduce(callback[, initialValue])
//reduce(function (accumulator, currentValue, currentIndex, array)) 

cost = [35,234,12,34,54,123]
let cartTotal = cost.reduce((total,el)=>total+el)
console.log(cartTotal)

arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

//result = {a:1,b:1,c:2,d:2...}
let result = {'a':1,'b':2}
result['c'] = 1
console.log(result['d']) 

console.log(arr2d.flat())
let count = arr2d.flat().reduce(
    (accumulator,currVal) => {
        if(accumulator[currVal])
            accumulator[currVal]++
        else
            accumulator[currVal] = 1
        return accumulator
    }
    ,{});

console.log(count)
console.clear()

let a = 100

function func1(){
    let b,c
    console.log('a is',a)
}

func1()
a = 200
func1()

//returning functions - higher order function
//lexical scoping - inner scope can access parent scope variables

//A closure is the combination of a 
//function bundled together (enclosed) 
//with references to its surrounding state 
//(the lexical environment). 
//In other words, a closure gives you 
//access to an outer function's scope from
//an inner function.
function outer(name){
    let outerVariable = 'Bread'
    function inner(){
        let innerVariable = 'Butter'
        console.log('inner variable',innerVariable)
        console.log('outer variable',outerVariable)
        console.log('a is',a)
        console.log('hello',name)
    }
    return inner
}   

let call1 = outer('Vidya')
call1()

let call2 = outer('John')
call2()
call1()

function makeAdder(x){
    return function(y){
        return x+y
    }
}

let add5 = makeAdder(5)
console.log(add5(10))

let add100 = makeAdder(100)
console.log(add100(20))
console.log(add100(45))
console.log(add5(22))

//Memory Management

let bigNum = 9007199254740991n

const bigNum2 = BigInt(9007199254740991)

let a = 100
a = 200
let b = a
b=300

console.log('a is ',a)
console.log('b is ',b)

let obj1 = {name:'Danya',age:24}
let obj2 = obj1

obj1.age = 25
obj2.name = 'ramya'

console.log('obj1',obj1)
console.log('obj2',obj2)

let arr1 = [2,3,4]
let arr2 = arr1
arr2[0] = 10
console.log(arr1,arr2)