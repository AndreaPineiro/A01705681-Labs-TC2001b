var password = document.querySelector(".password");
var confirmPassword = document.querySelector(".confirmPassword");
var errorText = document.querySelector(".error-text");
var showButton = document.querySelector(".show");
var boton = document.querySelector("button");

function activarBoton(){
    if(password.value.length >= 6){
        console.log(boton);
        boton.removeAttribute("disabled", "");
        boton.classList.add("active");
        confirmPassword.removeAttribute("disabled", "");
    }else{
        boton.setAttribute("disabled", "");
        boton.classList.remove("active");
        confirmPassword.setAttribute("disabled", "");
    }
}

boton.onclick = function(){
    if(password.value != confirmPassword.value){
      errorText.style.display = "block";
      errorText.classList.remove("matched");
      errorText.textContent = "¡Error! Las contraseñas no coinciden";
      return false;
    }else{
      errorText.style.display = "block";
      errorText.classList.add("matched");
      errorText.textContent = "¡Las contraseñas son válidas!";
      return false;
    }
}

function mostrarPassword(){
    if(confirmPassword.value != ""){
        showButton.style.display = "block";
        showButton.onclick = function(){
        if((password.type == "password") && (confirmPassword.type == "password")){
            password.type = "text";
            confirmPassword.type = "text";
          this.textContent = "Esconder";
          this.classList.add("active");
        }else{
            password.type = "password";
          confirmPassword.type = "password";
          this.textContent = "Mostrar";
          this.classList.remove("active");
        }
      }
    }else{
        showButton.style.display = "none";
    }
}

