const btnResume = document.querySelector(".resume-button");

btnResume.addEventListener("mouseover", changeColor);
btnResume.addEventListener("mouseout", changeColors);


function changeColor() {
  btnResume.style.backgroundColor = "white";
  btnResume.style.color = "black";
  btnResume.innerHTML("Click me");
  
}

function changeColors() {
  btnResume.style.backgroundColor = "black";
  btnResume.style.color = "#EDC441";
  btnResume.innerHTML("Click me");
  
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
   
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
  }