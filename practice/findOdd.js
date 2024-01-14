// find odd number

const find_odd = (a) =>{
    return a%2 !==0
}
num = 16;
if(find_odd(num)){
    console.log(`${num} is a odd number.`)
}
else{
    console.log(`${num} is not  odd number.`)
}

// find odd number using loop 
const find_loop_odd = (a) =>{
    for(let i = 1 ; i<=a;i+=2){
        console.log(i);
    }
}
find_loop_odd(20)

const isOdd = (num) =>{
    return num%2 !==0;
}

const find_Odd_InRange=(Start, end)=>{
    let oddNum = [];
    for(let i = Start ; i<=end;i++){
        if(isOdd(i)){
            oddNum.push("\n",i);
        }
    }
    return oddNum;
}

const startRange = 1; 
const endRange = 20;

const resOddnumRang = find_Odd_InRange(startRange,endRange);

console.log(`odd number in the range ${startRange} to ${endRange}`)
console.log(resOddnumRang.join(' '));

