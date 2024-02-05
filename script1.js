const add=(a,b)=>{
    return a+b;
}
const devide=(a,b)=>{
    return a/b;
}
const calculate=(a,b,operation)=>{
    return operation(a,b);
}
console.log(calculate(20,5,add))
console.log(calculate(20,5,devide))