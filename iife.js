(function chai(){
    console.log(`DB CONNECTED`)
})(); // error come through semi colon 
// GLOBAL SCOPE SE JO POLLUTION SE PROBLEM HOTI HAI KAI BAAR TO USS GLOBAL SCOPE KE VARIABLE YA JO DECELARTION USKE POLLUTION KO HATNE KE LIYE IIFE KA USED KARTE HAI 
// IIFE=IMEDIATEDLY INVOKED FUNCTION EXPRESSION(IIFE)
(function chaiaurcode(){
    console.log(`DB CONNECTED TWO`);
})();
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})(`Shivam`);
// call stack
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()