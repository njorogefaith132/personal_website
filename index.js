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
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      status.classList.add("success");
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);
