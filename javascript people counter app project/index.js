 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 
 let count = "i am hungry"
 function increment(){
     count  += 1 
     countEl.innerHTML = count
     
}
 
  function save(){
    let countstr = count + " - "
   saveEl.innerHTML += countstr
   countEl.innerHTML = 
   count = 0
   

 }



