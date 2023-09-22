let obj={
    name:"Alok",
    age:29,
    fullName:{
      fName:"Vishal",
      lName:"Verma"
    }
}

const {fullName:{fName}}=obj 

// console.log(fName)

function greet(name){
    return `Hi ${name}, ${this.title}`
}

let a1={title:"Verma"}

console.log(greet.call(a1,"Alok"))