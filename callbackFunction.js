function myFunction(a,b,operation){
        return operation(a,b); 

}
function sum(a,b){
    return a+b

}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function devi(a,b){
    return a/b
}
const res1 =myFunction(12,50,sum)
const res2 =myFunction(25,15,sub)
const res3 =myFunction(52,5,multi)
const res4 =myFunction(200,50,devi)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)