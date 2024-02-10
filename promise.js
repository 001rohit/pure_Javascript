// const promiseObj = new Promise((res,reject)=>{
//     let req = flase;
//     req ==true ? res("Request successfull"):reject("Request Rejected");
// })
// promiseObj.then((value)=>console(value)).catch((error)=>console.log(error))

function Check_status(number){
    return new Promise((resolve,reject)=>{
        if(number%2==0){
            resolve(`${number} is an even number.`)
        }
        else{
            reject(`${number} is an odd number`)
        }
    })
}
const Chech_num = 4
Check_status(Chech_num).then((message)=>console.log(`Success : ${message}`)).catch((err)=>console.log(`Reject: ${err}`));