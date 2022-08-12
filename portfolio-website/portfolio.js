let testBoolean = false; //global scope reading
let formDisplay = document.getElementById("form");
formDisplay.style.display = "none";

//when you create a text input in html, it creates a box
const toggle = () => {
  if (testBoolean === true) {
    testBoolean = false;
    formDisplay.style.display = "none";
  } else {
    testBoolean = true;
    formDisplay.style.display = "block";
  }
};

function onsubmit(e) {
  e.preventDefault(); //prevents page from refresh
  const data = new FormData(e.target);
  const firstName = data.get("fname"); //exactly the name of input element & useuable for lname
  const lastName = data.get("lname");
  const email = data.get("email");
  const pnum = data.get("pnum");
  if (/^[A-Za-z\s]+$/.test(firstName) && /^[A-Za-z\s]+$/.test(lastName)) {
    //&& (/.+@.+\..+/.test(email))
    console.log(firstName);
    console.log(lastName);
  } else {
    alert("valid name required");
  }

  if (/.+@.+\..+/.test(email)) {
    //const emailPattern = /.+@.+\..+/;//repeat line 24 & 25, if (string.match(emailPattern))
    console.log(email);
  }

  if (/^\d{10}$/.test(pnum)) {
    console.log(pnum);
  } else if (pnum>1){
    alert("Please enter 10 digit phone number (DIGITS ONLY)");
  }
}

formDisplay.addEventListener("submit", onsubmit);
