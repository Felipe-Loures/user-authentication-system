const registerForm = document.querySelector("#login-form");
const submitBtn = document.querySelector(".btn-continue");
const originalText = "REGISTRAR NO TERMINAL";

const validator = new window.JustValidate("#login-form", {
    errorLabelCssClass: "error-text",
    errorFieldCssClass: "input-error",
});

validator
    .addField("#fullname", [
        { rule: "required", errorMessage: "O nome completo é obrigatório" },
        { rule: "minLength", value: 3, errorMessage: "Mínimo de 3 caracteres" },
    ])
    .addField("#password", [
        { rule: "required", errorMessage: "A senha é obrigatória" },
        { rule: "minLength", value: 4, errorMessage: "Mínimo de 4 dígitos" },
    ])
    .addField("#confirm-password", [
        { rule: "required", errorMessage: "Confirme sua senha" },
        {
            validator: (value, fields) => {
                // Pega o valor do campo de senha para comparar
                const passwordValue = fields["#password"].elem.value;
                return value === passwordValue;
            },
            errorMessage: "As senhas não coincidem",
        },
    ])
    .onFail(() => {
        // Animação de erro (Shake)
        registerForm.classList.add("shake-error");
        setTimeout(() => registerForm.classList.remove("shake-error"), 500);

        // Reset do estilo do botão
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "transparent";
        submitBtn.style.color = "var(--neon-blue)";
    })
    .onSuccess((event) => {
        // Feedback visual de processamento
        submitBtn.disabled = true;
        submitBtn.innerHTML = "SINCRONIZANDO...";
        submitBtn.style.background = "var(--neon-blue)";
        submitBtn.style.color = "#000";

        setTimeout(() => {
            submitBtn.innerHTML = "ACESSO CONCEDIDO";
            submitBtn.style.background = "var(--neon-orange)";

            console.log("Usuário registrado sem e-mail.");

            // Redirecionamento após 1.5s
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        }, 1200);
    });