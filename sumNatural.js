// # sum of natural number

const sumNatural=(num)=>{
     let sum = 0;
     for(let i = 0 ; i<=num ; i++){
        sum = sum+i;
     }
     return sum;
}
console.log(sumNatural(4));