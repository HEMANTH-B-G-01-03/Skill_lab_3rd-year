let a=[];
let b=new Array();

a.push(1,2,3,4)
b.push(3,4,5,6)

console.log(a);
console.log(b);

console.log(a.length)
console.log(a.length)

let c=[]
c.push(1,'hemanth',true, function(){ console.log(" Bala bala  ");},{ name2:'pradymna '})
console.log(c[3]())

// to combine the array 
arr=[a,b]
console.log(`the combined array is ${arr}`)


// rest Opertor 

let retrunReceived =restOperator(1,2,3,4)
function restOperator(...args){
    console.log(args);
}


// spread opertor
 let array=[1,2,3,4]
 let array2=[5,6,7,8]

 let array3=[...array,...array2]
 console.log(array3)


const fetchData=callback=>{
setTimeout(()=>{
callback('Done')
},2000
)
}


setTimeout(()=>{
    console.log("  i am in the timer ")

    fetchData(text=>{
        console.log(text)
    })
}, 3000);


const fetchDataAsync=async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve('done')
        },2000);
    });
};

const main =async ()=>{
    
    await new  Promise((resolve)=> setTimeout(resolve,2500));
    console.log('timer is done ');
    const result = await fetchDataAsync();
    console.log(result);
   
    
}
main();

employee.Trainer()
employee.college()
employee["a developer"]=false;

for(let value in employee){
    console.log(employee[value]);
}

const {role,age}=employee
const {addr: {city}}=employee;
console.log(city)
console.log(role,"destructed role")
console.log(age,"destructed age")