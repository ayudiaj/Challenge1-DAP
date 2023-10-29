const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");
eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmeye = document.querySelector("#confirm-eye");
confirmeye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password"
    confirmPasswordInput.setAttribute("type", type)
  })
