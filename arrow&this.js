const user={
    username:"Shivam",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username="Rishav"
// user.welcomeMessage()
//console.log(this);
// browser ke ander jo bhi object hai wo global object hai 
// function chai(){
//     let username= "hitesh"
//     console.log(this.username);   // function decelared with (this function)
// }
// chai()
// const chai= function (){
//     let username = "Shivam"
//     console.log(this.username)
// }
// chai()

// arrow function
// const chai = ()=>{
//     let username="Shivam"
//     console.log(this.username);
// }
// chai()
// const addtwo =(num1,num2)=>{
//    return num1 + num2;
// }
// console.log(addtwo(3,4));
// const addtwo =(num1,num2)=> num1 + num2; // implict return 

// console.log(addtwo(3,4));
// const addtwo =(num1,num2)=>(num1 + num2); // implict return 

// console.log(addtwo(3,4));
const addtwo=({username:"Shivam"})

console.log(addtwo)