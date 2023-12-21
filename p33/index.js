
Array.prototype.myFilter=function cab(cb){
    let arr=[]

    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)) arr.push(this[i])
    }

    return arr
}

let arr1=[1,2,5,8,7]

let filtered=arr1.myFilter((el,i)=>{
    return el>4
})

// console.log(filtered)

Array.prototype.myReduce=function cab(cb,initial=0){
  let acc=initial

  for(let i=0;i<this.length;i++){
    acc = cb(acc, this[i], i, this);
  }

  return acc
}

let reduced=arr1.myReduce((acc,el,i,arr1)=>{
   return acc+el
})

console.log(reduced)