let btn=document.querySelector(".increment")
let btnPress=document.querySelector(".button_pressed")
let count=document.querySelector(".button_count")

var pressedCount=0
var triggeredCount=0

const debouncedCount=_.debounce(()=>{
  count.innerHTML=++triggeredCount
},800)

btn.addEventListener("click",()=>{
    btnPress.innerHTML=++pressedCount
    debouncedCount()
})