const arr = [1,2,3,4,5]

// Add  element in array to last position   
 const res2 = arr.push(6)
console.log(res2)
console.log(arr)

// Add  element in array to first position   
arr.unshift(0)
console.log(arr)

// Remove last element in array
arr.pop()
console.log(arr)

// Remove first element in array
arr.shift()
console.log(arr)

// filter method :- check value and find less value and greatest value series
const res3 = arr.filter((e)=>{
    return e<4
})
console.log(res3)

// find method :- check value and find less value and greatest value 
const res4 = arr.find((e)=>{
    return e>4
})
console.log(res4)

// forEach method:- modified the value to array
 arr.forEach((e)=>{
    console.log(e*3)
})

// map method:- use this method to provide new array 
const new_array = arr.map((e)=>{
    console.log(e*55)
    return e*55
})
console.log(new_array)

// use slice method
const res6 = arr.slice(0,3)
console.log(arr)
console.log(res6)
// use splice method
const res7 = arr.splice(0,4)
console.log(res7)

// rest parameter
function sum(...num){
    let total = 0;
    for(const val of num){
        total+=val;
    }
    return total;
}
console.log(sum(1,2,3,4,5))

// for loop
for(let i = 1 ; i<=10;i++){
    console.log(i)
}
//reverse 

for(let i = 10; i>=0;i--){
    console.log(i)
}


// While loop
let a = 1
while(a<=10){
    console.log(a)
    a++
}
//reverse 
let b = 10;
while(a>=0){
    console.log(a)
    a--
}


// Do while Loop
let c = 1
do{
console.log(c)
c++
}while(c<=100)
//reverse 
let x = 10
do{
console.log(x)
x--
}while(x>=0)

// for..of method in array
let array1 = [1,2,3,4,5]
count = 0
for(let val of array1){
  count+= val
}
console.log(count)

