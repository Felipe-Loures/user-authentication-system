const loginForm = document.querySelector("#login-form");
const submitBtn = document.querySelector(".btn-continue");
const originalText = "Entrar"; // Texto original do botão

const validator = new window.JustValidate("#login-form", {
  errorLabelCssClass: "error-text",
  errorFieldCssClass: "input-error",
});

validator
  .addField("#username", [
    {
      rule: "required",
      errorMessage: "O nome de usuário é obrigatório"
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "O usuário deve ter pelo menos 3 caracteres"
    },
  ])
  .addField("#password", [
    {
      rule: "required",
      errorMessage: "A senha é obrigatória"
    },
    {
      rule: "minLength",
      value: 4,
      errorMessage: "A senha precisa de pelo menos 4 dígitos"
    },
  ])
  .onFail(() => {
    loginForm.classList.add("shake-error");
    setTimeout(() => loginForm.classList.remove("shake-error"), 500);

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    submitBtn.style.background = "transparent";
    submitBtn.style.color = "var(--neon-blue)";
  })
  .onSuccess((event) => {
    // Feedback visual de "Autenticando"
    submitBtn.disabled = true;
    submitBtn.innerHTML = "AUTENTICANDO...";
    submitBtn.style.background = "var(--neon-blue)";
    submitBtn.style.color = "#000";

    setTimeout(() => {
      event.target.submit();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "transparent";
        submitBtn.style.color = "var(--neon-blue)";
      }, 3000);

    }, 1200);
  });