// function sayMyName(){
//     console.log("H"),
//     console.log("I"),
//     console.log("J"),
//     console.log("L"),
//     console.log("M")
// }
// sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(3,"a");
// function addTwoNumber(number1,number2){
//     let result=number1 + number2;
//     console.log("shivam") // ye return karega kyuki ye return ke annder hai 
//     return result;
//     console.log("shivam ") // ye kabhi bhi print nahi karega kyuki return phele kar gaya hai 

// }
// const result=addTwoNumber(2,5)
// console.log("Result:",result)
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("shivam"))
// function calculatePrice(...num1){ // ... means rest operator and seprate operator
//     function calculatePrice(val1,val2,...num1){
// return num1
//     }
// //     return num1

// // }
// console.log(calculatePrice(200,400,500,600))
const user={
    username:"shivam",
    rollno:132
}
function handleobject(anyuser){
 console.log(`username is ${anyuser.username} and rollno is ${anyuser.rollno}`)
}
handleobject(user)
const myNextArr=[200,400,600,800]
function returnSecondValue(getArr){
    return getArr[2]
}
console.log(returnSecondValue(myNextArr))