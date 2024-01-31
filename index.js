// while(true){
//     var y=15;
//     let z=20; // cant be used outside the while loop
//     const w=10;
//     break;
// }
// console.log(y);
// //console.log(w);
// //console.log(z);



// // function 


// function makemepass(pass){
//     return(pass);
// }
// let received=makemepass(35);

// console.log(received);


// welcome =function sayhi(name){
//  console.log(`hello ${name}`);
// }
// welcome("hemanth");




// let arrow =()=>{
//     console.log('arrow');
// }
// arrow();  // this cannot be called / invoked before defining the funciton 



// constructor 



// class Human{
//     constructor(skill, acomplishTime){
//      this.skill=skill;
//      this .acomplishTime=acomplishTime;

//     }
//     effortMakeIt(){
//         console.log(`${this.skill} acquired in ${this.acomplishTime}`);
//     }
// }
// const guru=new Human('Developer ',' 8 months ');
// const shishya = new Human(' Ui designer ',' 1.5 years ');

// guru.effortMakeIt();
// shishya.effortMakeIt();



// ways of creating an object 

let user = new Object();
let Student={};
let employees={
    role:" trainer",
    age:25,
    "x developer":true,
    Trainer : function(){
        console.log("has worked");
    }
};

employees["x developer"]=false;
console.log(employees.age);
console.log(employees["x developer"]); // to retriew the multispaced words 