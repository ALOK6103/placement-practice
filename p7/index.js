
// function unique(arr){

// const { log } = require("console")

//     let obj={}

//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i]

//         if(obj[ele]==undefined){
//             obj[ele]=1
//         }else{
//             obj[ele]++
//         }
//     }

//     let u=-1

//      for(let key in obj){
//         if(obj[key]==1){
//             u=key
//         }
//      }

//      return u
// }

// console.log(unique([4, 3, 4, 2, 2, 1, 1]))


// async function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             if(Math.random()<0.5){
//                 resolve('Data retrieved succefully')
//             }else{
//                 reject(new Error('Data retrieval failed'))
//             }
//         },1000)
//     })
// }

// async function handleData(){
//     try {
//       let result=  await fetchdata()
//       console.log(result)
//     } catch (error) {
//         console.log(error);
//     }
// }


// handleData()

// function fibonacchi(num){
//     let series=[0,1]

//     for(let i=2;i<num;i++){

//         let next=series[i-1]+series[i-2]

//         series.push(next)
//     }

//     return series
// }

// let result=fibonacchi(10)

// console.log(result)


// Call method example


// let obj={
//     name:"Alok"
// }

// function sayHello(age){
//     return "Hello"+this.name+"is"+age
// }

// console.log(sayHello.call(obj,24));



// apply method example


let obj={
    name:"Alok"
}

function sayHello(age,profession){
    return "Hello"+" "+this.name+"is"+age+" "+profession
}

console.log(sayHello.apply(obj,[24,"developer"]));