// normal for loop
for (let i=1; i<5; i++){ 
console.log("HAHA");
}
console.log("Loop has ended");

// normal while loop
let i =5;
while (i<10 ){ 
    console.log("haha");
    i++;
}

// do-while loop
let j=5;
do{ 
    console.log("hahaha");
    j++;
}while(j<10);

//for-of loop
let str = "github";
let size=0;
for(let value of str){
    console.log("value = ",value);
    size++;
}
console.log("string size=",size);

//for-in loop
let student={
    name : "Harry",
    age : 20,
    cgpa : 8.5,
    ispass : true
};
for(let i in student){
    console.log(i,"=",student[i]);
}
