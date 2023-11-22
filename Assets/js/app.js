//modal
const modal = document.getElementById("myDialog");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

//Opening and closing the modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//Form
const form = document.getElementById("myForm");
const fName = document.getElementById("fName");
const nameRegExp = /^[a-zA-Z\s]+$/;
const phoneNumber = document.getElementById("telNumber");
const numberRegExp = /^[0-9+]{8,11}$/;
const email = document.getElementById("Email");
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+){1,2}$/;
const errors = document.getElementById("error");
const requirements = document.getElementsByClassName("formRequiredment");

//JS Validating the form
form.addEventListener("submit", (e) => {
  const maxNameLength = 30;
  const maxNumberLength = 11;
  let errorMessages = [];

  //Validating name
  const trimmedName = fName.value.trim();
  const nameIsValid =
    trimmedName.length >= 4 &&
    trimmedName.length <= maxNameLength &&
    nameRegExp.test(trimmedName);
  if (!nameIsValid) {
    errorMessages.push("Name is required and must be bewteen 4 and 30 letters");
    requirements[0].style.color = "red";
  } else {
    requirements[0].style.color = "green";
    console.log("Name is valid");
  }

  if (trimmedName.length > maxNameLength) {
    e.preventDefault();
    fName.value = trimmedName.slice(0, maxNameLength);
  }

  //Validating Phone number
  const numberIsValid = phoneNumber.value.length <= maxNumberLength && numberRegExp.test(phoneNumber.value);
  if (!numberIsValid) {
    errorMessages.push("A valid phone number is required");
    requirements[1].style.color = "red";
  }
  else {
    requirements[1].style.color = "green";
    console.log("Number is valid");
  }
  //Validating Email
  const emailIsValid = email.value.length > 0 && emailRegExp.test(email.value);
  if (!emailIsValid) {
    errorMessages.push("A valid email is required");
    requirements[2].style.color = "red";
  } else {
    requirements[2].style.color = "green";
    console.log("Email is valid");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
  }

  if (nameIsValid && numberIsValid && emailIsValid) {
    console.log("Form udfyldt korrekt")
  }
});

//Image gallery
const bigImage = document.getElementById("bigImage");
const regImages = document.querySelectorAll(".favImg");
let originalBigImgSrc = bigImage.src;

const regImagesArray = Array.from(regImages);

regImagesArray.map((image) => {
  image.addEventListener("click", (e) => {
    let newBigImgSrc = bigImage.src;
    bigImage.src = e.target.src;
    e.target.src = newBigImgSrc;
  });
});
