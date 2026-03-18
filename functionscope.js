function one(){
    const username="shivam"
    function two(){
        const website="Google"
        console.log(username)
    }
    // console.log(website) // ye website local scope hai isko ander used karna chahiye 
    two()
}
one()
// if else 
    if(true){
        const username= " Shivam"
        if(username === " Shivam"){
            const website= " Google"
        console.log(username + website);
        }
        // console.log(websites)
    }
    // console.log(username)

    // +++++++++++++++ interseting ++++++++++++++
     addone(5)
    console.log(addone(5));

    function addone(num){   // function hai 
        return num +1;
    }
   

//addtwo(5)
    //console.log(addtwo(5))    // yaha pe javascript mae decelaried karne ke sath value ko hold bhi kar liye hai 
    const addtwo=function(num){   // ye bhi function hai but isko expression bhi bolte hai 
        return num +2;            // ye aage chal ke ek concept aata hai jisko bolte hai hosting 
    }
    addtwo(5)
    console.log(addtwo(5))
    