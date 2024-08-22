/// VAlidation for login form
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Login Succesfully`);
});

const name = myForm.elements["name"];

const password = myForm.elements["password"];

myForm.addEventListener("submit", validate);


function validate(evt) {
    const nameVal = validateName();
    if (nameVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const passwordVal = validatePassword();
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    return true;
  }
  

  // Name Validation
function validateName() {
    if (name.value === "") {
      alert("Please provide a name.");
      name.focus();
      return false;
    }
    return name.value;
  }
  
  // Password Validation
  function validatePassword() {
    if (password.value === "") {
      alert("Please provide a password.");
      password.focus();
      return false;
    }
    return password.value;
  }