/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let OrderEmpire = document.querySelector(".option-one");
let OrderEmpireScreen= document.querySelector(".option-one-screen");
let ChaosEmpire = document.querySelector(".option-two");
let ChaosEmpireScreen= document.querySelector(".option-two-screen");

OrderEmpire.onclick=function(){
    OrderEmpireScreen.style.display ="block";
    opening.style.display ="none";
    OrderEmpire.style.display ="none";
 };

ChaosEmpire.onclick=function(){
    ChaosEmpireScreen.style.display ="none";
    ChaosEmpire.style.display ="none";
};



//paragraph.innerHTML = "Whom?";

// setTimeout(() => {
//     paragraph.innerHTML = "Who's Will, will be yours?";
// }, 4000);