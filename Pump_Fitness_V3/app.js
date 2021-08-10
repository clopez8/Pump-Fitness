
// Off Canvas Sidebar JS
const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");

function toggleNav() {
  navTriggerEl.addEventListener("click", function() {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
  });
} 

function animateHamburgers() {
  for (let item of hamburgerBarsEl) {
    item.classList.toggle("change");
  }
}

toggleNav();


// Modal Pop-Up Window JS
const openModalTriggerEl = document.querySelector(".Sign_Up_Button");
const closeModelTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");

function main() {
  openModalTriggerEl.addEventListener("click", function() {
    modalEl.classList.add("open_modal");
  })

  closeModelTriggerEl.addEventListener("click", function() {
    modalEl.classList.remove("open_modal");
  })

  window.addEventListener("click", function(event) {
    if (event.target === modalEl) {
      modalEl.classList.remove("open_modal");
    }
  })
}

main();


// Email Form Input Validator
const form = document.getElementsByTagName('form')[0];

const firstName = document.getElementById('first');
const firstNameError = document.querySelector('#first + span.error');

const lastName = document.getElementById('last');
const lastNameError = document.querySelector('#last + span.error');

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

const phone = document.getElementById('phone');
const phoneError = document.querySelector('#phone + span.error');

firstName.addEventListener('input', function (event) {

  if (firstName.validity.valid) {

    firstNameError.textContent = '';
    firstNameError.className = 'error';
  } else {

    showErrorFirstName();
  }
});

lastName.addEventListener('input', function (event) {

  if (lastName.validity.valid) {

    lastNameError.textContent = '';
    lastNameError.className = 'error';
  } else {

    showErrorLastName();
  }
});

email.addEventListener('input', function (event) {

  if (email.validity.valid) {

    emailError.textContent = '';
    emailError.className = 'error';
  } else {

    showErrorEmail();
  }
});

phone.addEventListener('input', function (event) {

  if (phone.validity.valid) {

    phoneError.textContent = '';
    phoneError.className = 'error';
  } else {

    showErrorPhone();
  }
});


form.addEventListener('submit', function (event) {

  if(!firstName.validity.valid) {

    showErrorFirstName();

    event.preventDefault();
  }

  if(!lastName.validity.valid) {

    showErrorLastName();

    event.preventDefault();
  }

  if(!email.validity.valid) {

    showErrorEmail();

    event.preventDefault();
  }

  if(!phone.validity.valid) {

    showErrorPhone();

    event.preventDefault();
  }
});

function showErrorFirstName() {
  if(firstName.validity.valueMissing) {

    firstNameError.textContent = 'This field is required.';
  } else if(firstName.validity.typeMismatch) {

  firstNameError.className = 'error active';

  }
};

function showErrorLastName() {
  if(lastName.validity.valueMissing) {

    lastNameError.textContent = 'This field is required.';
  } else if(lastName.validity.typeMismatch) {

  lastNameError.className = 'error active';

  }
};

function showErrorEmail() {
  if(email.validity.valueMissing) {

    emailError.textContent = 'This field is required.';
  } else if(email.validity.typeMismatch) {

    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  emailError.className = 'error active';

};

function showErrorPhone() {
  if(phone.validity.valueMissing) {

    phoneError.textContent = 'This field is required.';
  } else if(phone.validity.typeMismatch) {

    phoneError.textContent = 'Entered value needs to be a mobile number.';
  } else if(phone.validity.tooShort) {
    
    phoneError.textContent = `The mobile number should be at least ${ phone.minLength } digits; you entered ${ phone.value.length }.`;
  }

  phoneError.className = 'error active';

};

