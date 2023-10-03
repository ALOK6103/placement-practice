
for(let i=0;i<100;i++){
    if(i%3==0 && i%5==0){
      console.log("FizzBuzz")
    }else if(i%3==0){
       console.log("Fizz") 
    }else if(i%5==0){
        console.log("Buzz");
    }
}


function reverseF(a){
  let x=a.split("")

  let z= x.reverse().join("")
   console.log(z)
}

reverseF("hello")
