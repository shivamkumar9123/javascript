// Object.create - singleton method
const mysmb=Symbol("key")
const jsUser={
    name:"shivam",
    "full name":"shivam kumar",
    [mysmb]:"mysmbl1",
    email:"shivamkumarmehta9123@gmail.com",
    location:"purnea",
    IsloggedIn:false,
    LastloggedOut:["monday","saturday"]
}
console.log(jsUser.email);
// console.log(jsUser[email]);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysmb])
console.log(typeof jsUser[mysmb])
// jsUser.email="shivamkumarmehta9123@microsoft.com"; - email change
// Object.freeze(jsUser)// - no any change after freeze
jsUser.email="shivamkumar364@chatgpt.com"; 
console.log(jsUser)
jsUser.greeting=function(){
    console.log(" hello JS User")
}
console.log(jsUser.greeting());
jsUsertwo.greeting=function(){
    console.log('hello Js user,${this.name}');
}
console.log(jsUser.greeting)
console.log(jsUsertwo.greeting());

