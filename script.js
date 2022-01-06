//Reference to html Elements//
let form = document.querySelector("form");
let name = document.querySelector("#name");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  console.log("form submitted");
});
function checkInputs() {
  //gets value from inputs//
  const nameValue = name.value.trim();
  const lastNameValue = last_name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  //References to error text element 'h5'//
  const fifthHeadingName = document.getElementById("fifthHeadingName");
  const fifthHeadingLName = document.getElementById("fifthHeadingLName");
  const fifthHeadingEmail = document.getElementById("fifthHeadingEmail");
  const fifthHeadingPassword = document.getElementById("fifthHeadingPassword");

  //CONDITIONS//
  //checks value of inputs => throw error (adds error class and text content error into each h5 element ) if (empty). else prints successful//
  //NAME condition//
  if (nameValue === "") {
    //shows error
    name.classList.add("error");
    fifthHeadingName.textContent = "First Name cannot be empty";
    console.log("unfilled name");
  } else {
    //adds success class
    console.log("successful name input");
  }

  //LAST NAME condition //
  if (lastNameValue === "") {
    //shows error
    last_name.classList.add("error");
    fifthHeadingLName.textContent = "Last Name cannot be empty";
    console.log("unfilled last name ");
  } else {
    //adds success class
    console.log("successful last name input");
  }

  //EMAIL condition//
  if (emailValue === "") {
    //shows error
    // emptyElement.appendChild(errorTxt);//
    fifthHeadingEmail.textContent = "Looks like this is not an email";
    email.classList.add("error");
    console.log("unfilled email");
  } else {
    //adds success class
    console.log("successful email input");
  }

  //PASSWORD condition//
  if (passwordValue === "") {
    //shows error
    fifthHeadingPassword.textContent = "Password cannot be empty";
    password.classList.add("error");
    console.log("unfilled email");
  } else {
    //adds success class
    console.log("successful Password input");
  }
}
