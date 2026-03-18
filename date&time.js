let myDate= new Date;
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// creates own date
let myCreatesDates=new Date(2025,0,27);
console.log(myCreatesDates.toDateString());
// yearchange
let myCreatesDates1=new Date(28,0,2025);
console.log(myCreatesDates1.toDateString());
//current time
let myCurrentCreatesDate2=new Date(2025,9,27);
console.log(myCurrentCreatesDate2.toDateString());
console.log(myCurrentCreatesDate2.toString());
console.log(myCurrentCreatesDate2.toTimeString());
console.log(myCurrentCreatesDate2.toUTCString());
let myDateTime=new Date(2025,9,27,8,25);
console.log(myDateTime.toDateString());