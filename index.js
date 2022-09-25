//document.getElementById("count-el").innerText= 5
let count=0
let countEl=document.getElementById("count-el")//pass in argument
let saveEl=document.getElementById("save-el")
function increment() {
    count+=1
    countEl.innerText=count
    console.log(count)
}

function save() {
    let countStr=  count  +" "+  " -" 
    saveEl.textContent+=countStr
    countEl.textContent = 0
    count=0
}



