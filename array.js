const myArr=[1,2,3,4,5];
myArr.push(8)
myArr.pop() //pop mae koi sa value put nahi karte hai pop mae last ka value remove khud hi ho jata hai
myArr.unshift(9)//unshift ka kaam hai value ko add karna front mae 
myArr.shift()//shift ka kaam hai front se  element ko delete karna 
console.log(myArr);
console.log(myArr.includes(9));// includes value deta hai true and false mae
console.log(myArr.indexOf(9));//indexof ka kaam hai yaadi jo digit put karenge wo hai to uska index batayega or nahi hai to wo -1 batayega 
const newArr=myArr.join();//join add all element of array into string separated by specified separator
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


