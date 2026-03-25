function greet(name,sayBye){

    console.log("Hello" + name);
    sayBye();
    console.log("call returning back to greet");
    
}
// function sayBye(){
//     console.log("Bye!");
    
// }
greet("Shivam",()=>{
    console.log("say bye");
});
 
let result=greet("Shivam",()=>{
    console.log("Bye");
})
// high order Function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
console.log(calculate(10,5,add));//15

// Every callback is passed to a HOF
// Function using another function = Higher Order function
// Function being passed = callback

// for each loop 
let student=["Aniket","Ram","Mohan"];
student.forEach((name,index)=>{
    console.log(index + "->"+ name);
});
let b=student.forEach((i,k,j)=>{
    console.log("array log",i,k,j);
    
});
console.log(b);

