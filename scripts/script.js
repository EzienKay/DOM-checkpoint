
// items deletion 
let deleteBtn = document.getElementsByClassName("deleteBtn");

for (const del of deleteBtn) {
    del.addEventListener("click", () => {
        del.parentElement.remove()

    })       
}

//change like color

let likeIcon = document.getElementsByClassName("likeIcon");

for (const like of likeIcon) {
    like.addEventListener("click", () => {
        if(like.style.color != "red"){
            like.style.color = "red";
        }else if(like.style.color == "red"){
            like.style.color = "grey";
        }
    })      
}


// increase and decrease count

let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");

let count = document.getElementById("count");
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");


   //handle increment
     const increments = () => {
        count.innerHTML++;
    }

    // //handle decrement
   const decrements = () => {
        if (count.innerHTML <= 1 ) {
           count.innerHTML= 1;            
        } else {
            count.innerHTML--;
        }        
    }
    increment.addEventListener("click", increments);
    decrement.addEventListener("click", decrements);
  


