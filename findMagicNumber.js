// find the magic number 

const magic_number = (num) =>{
    while(num>9){
        let sum = 0;

        while(num>0){
            sum+=num%10;
            num = Math.floor(num/10);
        }
        num = sum;
    }
    return num ===1;
}
const number = 101;

if(magic_number(number)){
    console.log(`${number} is a magic number.`);
}else{
    console.log(`${number} is not a magic number.`);
}
