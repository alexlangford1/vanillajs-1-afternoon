

let id = document.getElementById("getId");

let color = document.getElementById("getColor");





function setCard(){
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value
}