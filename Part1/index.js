
let arr = [];
function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Winner Winner Chicken Dinner";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<form><button id="okBtn" onclick="Alert.ok()">Play Again</button></form>';
    }
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}
var Alert = new CustomAlert();


function play(param){
   
    let player = document.getElementById('player');
    let clickedBox = document.getElementById(param);
   
   if(clickedBox.innerText === ""){
    clickedBox.innerText = player.innerText
    if(player.innerText === "X"){
        player.innerText = "O";
        arr[param] = "X"
        
   } else {
       player.innerText = "X"
       arr[param] = "O"
     } 
   }
  
   
   let sq1 = arr[0];
   let sq2 = arr[1];
   let sq3 = arr[2];
   let sq4 = arr[3];
   let sq5 = arr[4];
   let sq6 = arr[5];
   let sq7 = arr[6];
   let sq8 = arr[7];
   let sq9 = arr[8];

if(sq1 !== undefined && sq1 === sq2 && sq1 === sq3){
    Alert.render(`${sq1} is the Winner!!!`)
} else if(sq1 !== undefined && sq1 === sq4 && sq1 === sq7){
    Alert.render(`${sq1} is the Winner!!!`)
 } else if(sq1 !== undefined && sq1 === sq5 && sq1 === sq9){
    Alert.render(`${sq1} is the Winner!!!`)
}else if(sq3 !== undefined && sq3 === sq5 && sq3 === sq7){
    Alert.render(`${sq3} is the Winner!!!`)
}else if(sq3 !== undefined && sq3 === sq6 && sq3 == sq9){
    Alert.render(`${sq3} is the Winner!!!`)
}else if(sq4 !== undefined && sq4 === sq5 && sq4 === sq6){
    Alert.render(`${sq4} is the Winner!!!`)
}else if(sq7 !== undefined && sq7 === sq8 && sq7 === sq9){
    Alert.render(`${sq7} is the Winner!!!`)
}else if(sq2 !== undefined && sq2 === sq5 && sq2 === sq8){
    Alert.render(`${sq2} is the Winner!!!`)
} 


let catGame = true
  for(let i = 0; i <= 8; i++){
    if(arr[i] === undefined){
        catGame = false
    }
  }
  if(catGame === true){
    Alert.render("CAT'S GAME! Better luck next time!")
  }
};


// let catsGame = true
// for(let i = 0; i <= 8; i++){
//   if(arr[i] === undefined){
//       catsGame = false
//   }
// }
// if(catsGame === true){
//   windows.alert("CAT'S GAME")
// }
// }