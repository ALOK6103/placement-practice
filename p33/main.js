// class Car {
//     constructor(company, model){
//         this.company=company
//         this.model=model
//     }

//     drive(){
//         console.log("Driving...")
//     }
// }

// let car1=new Car("Audi", "R-8")

// // console.log(car1)

// class Electric extends Car{
//     constructor(company,model,batteries){
//         super(company,model)
//         this.batteries=batteries
//     }

//     charging(){
//         console.log("battery charging...")
//     }
// }

// let car2=new Electric("Audi", "R-8", "battery charged")

// console.log(car2)


function PerformOperation(x,y,callback){
    let result=x+y

    callback(result)
}

function displayOperation(result){
    console.log(result)
}

PerformOperation(5,6,displayOperation)