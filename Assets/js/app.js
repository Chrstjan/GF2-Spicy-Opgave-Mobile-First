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
    requirements[0].classList.add("errorMessage");
  } else {
    requirements[0].classList.add("correctMessage");
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
    requirements[1].classList.add("errorMessage");
  }
  else {
    requirements[1].classList.add("correctMessage"); 
    console.log("Number is valid");
  }
  //Validating Email
  const emailIsValid = email.value.length > 0 && emailRegExp.test(email.value);
  if (!emailIsValid) {
    errorMessages.push("A valid email is required");
    requirements[2].classList.add("errorMessage");
  } else {
    requirements[2].classList.add("correctMessage");
    console.log("Email is valid");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    console.log(errorMessages);
  }

  if (nameIsValid && numberIsValid && emailIsValid) {
    console.log("Form udfyldt korrekt")
    modal.removeChild(form);
    let formResponseMsg = document.createElement("h2");
    formResponseMsg.innerText = "Din mail er sendt afsted!";
    modal.appendChild(formResponseMsg);
  }
});

//Js Generated Gallery
const galleryArray = ['Chili-01.jpg', 'Chili-02.jpg', 'Chili-03.jpg', 'Chili-04.jpg', 'Chili-05.jpg', 'Chili-06.jpg',];

const baseUrl = './Assets/images/Product/';

const gallery = document.getElementById("gallery");
const galleryFigure = document.getElementById("galleryFigure");

const createImageGallery = () => {
  galleryArray.forEach((img) => {
    const galleryImage = document.createElement("img");
    const galleryImageSrc = baseUrl + img;
    galleryImage.classList.add("gallery-images");
    galleryImage.src = galleryImageSrc;

    galleryFigure.appendChild(galleryImage);
    gallery.appendChild(galleryFigure);

    const imageModal = () => {
      const imageModalWindow = document.createElement("figure");
      const modalImage = galleryImage;
      modalImage.classList.add("modal-image");
      galleryFigure.innerHTML = "";
      imageModalWindow.appendChild(modalImage);
      galleryFigure.appendChild(imageModalWindow);

      imageModalWindow.addEventListener("click", () => {
        galleryFigure.innerHTML = "";
        createImageGallery();
      });
    };

    galleryImage.addEventListener("click", imageModal);
  });

};

createImageGallery();

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
