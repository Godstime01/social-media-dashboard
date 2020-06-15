document.querySelector(".switch").addEventListener("click", () =>{
    document.querySelector("body").classList.add("lighttheme");
    let  numberOfItem=document.querySelectorAll(".card").length
    for(var i=0; i < numberOfItem; i++){
        document.querySelectorAll(".card")[i].classList.add("lightcard");
    }
    let numberOfItemWithSmallCard=document.querySelectorAll(".small_cards").length;
    for(i=0; i < numberOfItemWithSmallCard; i++){
        document.querySelectorAll(".small_cards")[i].classList.add("lightsmallcard");
    }
    
})