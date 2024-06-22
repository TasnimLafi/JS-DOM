
let heart_shape = document.getElementsByClassName("heart_butt")
let plus_btn = document.getElementsByClassName("plus-btn")
let Quant = document.getElementsByClassName("Quant")
let minus_btn = document.getElementsByClassName("minus-btn")
let deletee= document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
let finalPrice=document.getElementById("finalPrice")
let prices=document.getElementsByClassName("price")
for(let i = 0;i<heart_shape.length;i++){
    heart_shape[i].addEventListener("click",function(){
        if(heart_shape[i].style.color=="red"){
            heart_shape[i].style.color="black"
        }else{
            heart_shape[i].style.color="red"
        }
    
    })
    plus_btn[i].addEventListener("click",function(){
        Quant[i].value=Number(Quant[i].value)+1
        finalPrice.value=Number(finalPrice.value)+Number(prices[i].textContent)
    })
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value) > 1){
            Quant[i].value=Number(Quant[i].value)-1
            finalPrice.value=Number(finalPrice.value)-Number(prices[i].textContent)   
        }
        
    })
    deletee[i].addEventListener("click",function(){
        Item[i].style.display="none"
        finalPrice.value=Number(finalPrice.value)-Number(prices[i].textContent)*Number(Quant[i].value)
    })



}
