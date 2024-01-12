let counterr = document.getElementById("count-el")
let saver    =document.getElementById("save-el")
console.log(counterr)    


console.log(saver)                                                      
let count = 0
function incrementfun() {

    count = count + 1
    counterr.innerText = count
}



function save() {
    let countStr = count + " - "
    
    saver.innerText += countStr
    console.log(count)

    counterr.innerText = 0
    count = 0
}

