
const find_LCM = (num1,num2) =>{
    while(num2!==0){
        const temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }
    return num1;
}

const findLCM = (num1,num2) =>{
    let gcd = find_LCM(num1,num2);
    return (num1,num2)/gcd;
}
const num1 = 112;
const num2 = 108;

const lcm = findLCM(num1,num2);
console.log(`LCM of ${num1} and ${num2} is : ${lcm}`);