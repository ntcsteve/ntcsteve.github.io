// image changer
let myImage = document.querySelector("img"); 

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src")
  if (mySrc === "images/johnwick1.jpg") {
      myImage.setAttribute("src", "images/johnwick2.jpg");
    } else {
      myImage.setAttribute("src", "images/johnwick1.jpg");
    }
  }

// welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("What's your name?");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `John Wick is cool, ${myName}`;
    document.body.style.backgroundColor = 'white';
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `John Wick is cool, ${storedName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};