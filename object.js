// // Object.create - singleton method
// const mysmb=Symbol("key")
// const jsUser={
//     name:"shivam",
//     "full name":"shivam kumar",
//     [mysmb]:"mysmbl1",
//     email:"shivamkumarmehta9123@gmail.com",
//     location:"purnea",
//     IsloggedIn:false,
//     LastloggedOut:["monday","saturday"]
// }
// console.log(jsUser.email);
// // console.log(jsUser[email]);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysmb])
// console.log(typeof jsUser[mysmb])
// // jsUser.email="shivamkumarmehta9123@microsoft.com"; - email change
// // Object.freeze(jsUser)// - no any change after freeze
// jsUser.email="shivamkumar364@chatgpt.com"; 
// console.log(jsUser)
// jsUser.greeting=function(){
//     console.log(" hello JS User")
// }
// console.log(jsUser.greeting());
// jsUsertwo.greeting=function(){
//     console.log('hello Js user,${this.name}');
// }
// console.log(jsUser.greeting)
// console.log(jsUsertwo.greeting());

// let user2=new Object();
// user2.name="shivam";
// user2.age=20;
// console.log("user",user2);
// console.log("userName:",user2.name);
// // dot notation
// console.log(user2.age);
// // bracket notation
// console.log(user2["name"])
// // heap 
// let a={x:10};
// let b=a;
// b.x=20;
// console.log(a.x);
// let firstname="rahul"
// let person={
//     firstname:"shivam",
// greet:function(){
//     return "Hello"+ this.firstname;
// }};
// console.log(person.greet())
// // nested object
let company={
    name:"google",
    location:{
        city:"delhi",
        pincode:100000,
        googlemap:{
            latitude:"",
            longitude:""
        }
    }
};
// console.log(company.location.city);
// console.log(company);
// for(let key in company){
//     console.log(company[key]);
// }

// let user={
//     name:"shivam",
//     age:20,
//     isAdmin:true
// };
// for(let key in user){
// console.log("value:",user[key]);
// }
//nested loop
// for(key in company){
//     if(typeof company[key]==='object'){
//         for(let innerkey in company[key]){
//             console.log(innerkey,company[key][innerkey]);
            
//         }
//     }
//     else{
//         console.log(key,company[key]);
        
//     }
// }
// recursion 
function printobject(company){
    for(key in company){
    if(typeof company[key]==='object'){
        // for(let innerkey in company[key]){
        //     console.log(innerkey,company[key][innerkey]);
            // printobject(company[key]);
        // }
        console.log("object",company[key]);
        
        printobject(company[key]);
    }
    else{
        console.log(key,company[key]);
        
    }
}
}
printobject(company);
// array
let a1=[1,2,3]
let a2=a1;
a2.push(4);
console.log(a1);
// copy methods
let b=a1;
b.push(55);
console.log(a1);
let c=[...a1];
// let c=a1
c.push(90);
console.log(a1);
// deep copy vs shallow copy 
// spread operator




