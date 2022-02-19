const buttons=document.querySelectorAll(".button")
const lottey_button=document.querySelector(".lottery")


lottey_button.addEventListener("click",()=>{
const lotteryNumbers=[]
for(let i=1;i<=6;i++){
let number=Math.ceil(Math.random()*48)
if(lotteryNumbers.indexOf(number)==-1){lotteryNumbers.push(number)
}else{
i--

}


}

let i=0
buttons.forEach(btn=>{
btn.textContent=lotteryNumbers[i]
i++


})







})