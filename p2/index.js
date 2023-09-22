let obj={
    name:"Alok",
    age:29,
    fullName:{
      fName:"Vishal",
      lName:"Verma"
    }
}

const {fullName:{fName}}=obj 

console.log(fName)