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

// console.log(greet.call(a1,"Alok"))

  // CONSTRUCTURE FUNCTION 


  function BankDetails(holderName,balance){
      this.holderName=holderName,
      this.accNumber=Date.now(),
      this.balance=balance

      // this.deposit=function (amount){
      //   this.balance +=amount
      // }
  }
  
  BankDetails.prototype.deposit=function (amount){
    this.balance +=amount
  }

  const u1=new BankDetails("Alok",1000)
  const u2=new BankDetails("verma",2000)

  u1.deposit(3000)
  u2.deposit(8000)

  // console.log(u1,u2)

  function getpromiseText(text,time){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(text)
      }, time);
    })
  }

  Promise.all([
    getpromiseText("hello dear",1000),
    Promise.resolve("Hi")
  ]).then((value)=>{
    console.log(value)
  })
