let counterr = document.getElementById("count-el")
let saver    =document.getElementById("save-el")
console.log(counterr)    //<h2 id="count-el">0</h2>...jab jab click hoga ye 1/2/3/4 scrren pe hoga 
                                                      //aur yha bhi hoga



console.log(saver)                                                      
let count = 0
function incrementfun() {

    count = count + 1
    counterr.innerText = count
}

//mtlb jab jab incrment button click hoga tb increment function jo index.js me h wo chalega..

// function save() {
//     console.log(count)
// }  ///ISSE CONSOLE ME HI SHOW HORA BAS..

// HUMNE  YOUR PREVIOUS ENTRES KE AAGE LIKHNAA NA PAR... 
//TO ISLIYE HUMNE EK OBJECT BNAYA SAVERR..AUR...  let saver    =document.getElementById("save-el")
//TO SAVE FUNCTION BNAKE..JAISE COUNTERR.INNERtEXT=COUNT KIA THA NA WASE HI..SAVER.INNERtEXT + = COUNTSTR
//WHERE COUNTSTRKO COUNT+ - BNADENGE..TAKI - BI ATA RHE..

//AUR BAAD ME SAVE KRNE KE BAAD ENTRIES KO RESET KBHI TO KROGE ISLIYE..counterr.innerText = 0
    //aur count = 0

function save() {
    let countStr = count + " - "
    
    saver.innerText += countStr
    console.log(count)

    counterr.innerText = 0
    count = 0
}

