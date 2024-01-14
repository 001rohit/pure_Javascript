// # sum of odd number

const  sumOdd=(num)=>{
    let sum = 0;
    for(let i = 1;i<=num ; i+=2){
        sum = sum + i;
    }
    return sum;
}
console.log(sumOdd(3))