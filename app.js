const output= document.getElementById("output")
const btn= document.getElementById("btn")
const Input= document.getElementById("userInput")

x= Math.floor(Math.random() * 100)
// console.log(x)
let attempt = 0

btn.addEventListener("click", function(e){
    e.preventDefault()
 attempt ++
    // output.style.display= "block"
    if(!Input.value){
        output.innerHTML= "Enter A Number!!"
        output.style.color= "red"
        return 
    }
    else{
        if(Input.value == x){
            output.innerHTML= `You guessed Right, your number is ${x}, and you try ${attempt} times`
            output.style.color= "#00e300"
            document.body.style.pointerEvents= "none"

        }else if(Input.value < x){
            output.innerHTML= "You guessed Low!"
            output.style.color="orange"
        }else{
            output.innerHTML= "You guessed high!"
            output.style.color= "orange"
        }
    }
})