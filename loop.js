// for loop
// for (let m = 0; m < 20; m++) {
//     const element = m;
//     if (element==5) {
//         console.log("5 is best no.");
//         continue;
//     }
//     console.log(element);
// }
for (let i = 1; i <=10; i++) {
    console.log(`outer loop value:${i}`);
    
    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop value: ${j} and inner loop value:${i}`);
        //console.log("i"+"*"+"j"+" ="+ i*j);
        console.log(`i*j:${i*j}`);
        
        
    }
    
}
let myarr=[10,20,50,90,60,70,30,80,40];
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    //console.log(myarr);
    
}
console.log(myarr);
// break and continue 
// for (let d = 1; d <=20; d++) {
//     //const element = array[d];
//     if (d==5) {
//         console.log("5 is best no.");
//         break;
        
//     }
//     console.log(`value of d is ${d}`);
    
    
// }
for (let d = 1; d <=20; d++) {
    //const element = array[d];
    if (d==5) {
        console.log("5 is best no.");
        continue;
        
    }
    console.log(`value of d is ${d}`);
}
// while loop 
let i=1;
while (i<=10) {
    console.log(`value of i:${i}`);
    i++;
}
let myarr1=['batman','superman','spiderman','heroes'];
let arr=0;
while (arr<myarr1.length) {
    console.log(`values of arr: ${myarr1[arr]}`)
    arr++;
}
// do while loop
let score=101;
do {
    console.log(`score of subject:${score}`);
    score++;
} while (score<=100 );
