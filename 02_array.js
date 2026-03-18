const marvale_heroes=["spiderman","thor","ironman"]
const dc_heroes=["spiderman","batman","flash"]
// marvale_heroes.push(dc_heroes);
// console.log(marvale_heroes);
const all_new_heroes=[...marvale_heroes,...dc_heroes];
console.log(all_new_heroes);
const another_array=[1,2,3,4,5,[6,7,8],[4,5,6,7],[7,8,9[4,5,6]]];
const real_another_array=another_array.flat(4);
console.log(real_another_array);
console.log(Array.isArray("shivam"));
console.log(Array.from("shivam"));
console.log(Array.from({name:"shivam"}));
let score1=100;
let score2=200;
let score3=300;
let score4=400;
let score5=500;
console.log(Array(score1,score2,score3,score4,score5));