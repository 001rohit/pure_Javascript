// sum of total number of array
const sumArray = (num) =>{
    let sum =0;
    for(let i = 0; i<num.length;i++){
        sum= sum+num[i];
    }
    return sum;
}

const num = [10,20,30]
const res = sumArray(num)
console.log(res)
