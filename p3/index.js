
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
   return z
}

console.log(reverseF("hello"))

function palindrome(str){
     
    let pal=str.split("").reverse().join("")

    if(str===pal){
        return "Palindrome"
    }else{
        return "Not Palindrome"
    }
}

console.log(palindrome("naman"))
