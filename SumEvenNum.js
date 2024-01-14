// # Sum of Even number

const sumEven=(num)=>{
   let res = 0;
    for(let i = 2; i<=num;i+=2){
         res = res + i;
}
return res;
}
console.log(sumEven(6));