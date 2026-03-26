const registerForm = document.querySelector("#register-form");
const submitBtn = document.querySelector(".btn-terminal");
const originalText = "INICIAR REGISTRO";

const validator = new window.JustValidate("#register-form", {
    errorLabelCssClass: "error-text",
    errorFieldCssClass: "input-error",
});

validator
    .addField("#fullname", [
        { rule: "required", errorMessage: "A biometria (nome) é obrigatória" },
        { rule: "minLength", value: 3, errorMessage: "Mínimo de 3 caracteres" },
    ])

    .addField("#email", [
        { rule: "required", errorMessage: "O SISTEMA_ID (E-mail) é obrigatório" },
        { rule: "email", errorMessage: "Protocolo de e-mail inválido" },
    ])

    .addField("#password", [
        { rule: "required", errorMessage: "A chave de encriptação é obrigatória" },
        { rule: "minLength", value: 4, errorMessage: "Mínimo de 4 dígitos" },
    ])

    .addField("#confirm-password", [
        { rule: "required", errorMessage: "Confirme sua chave de acesso" },
        {
            validator: (value, fields) => {
                const passwordValue = fields["#password"].elem.value;
                return value === passwordValue;
            },
            errorMessage: "As chaves não coincidem",
        },
    ])

    .onFail(() => {
        // Animação de erro (Shake) definida no seu CSS
        registerForm.classList.add("shake-error");
        setTimeout(() => registerForm.classList.remove("shake-error"), 500);

        // Feedback de falha no botão
        submitBtn.innerHTML = "FALHA NO PROTOCOLO";
        submitBtn.style.color = "var(--neon-red)";

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.color = "var(--neon-blue)";
        }, 2000);
    })
    .onSuccess((event) => {
        // Feedback visual de processamento (Hacker style)
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-sync fa-spin"></i> SINCRONIZANDO...`;
        submitBtn.style.background = "var(--neon-blue)";
        submitBtn.style.color = "#000";

        // Simulação de delay de rede
        setTimeout(() => {
            submitBtn.innerHTML = "ACESSO CONCEDIDO";
            submitBtn.style.background = "var(--neon-orange)";
            submitBtn.style.boxShadow = "0 0 20px var(--neon-orange)";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        }, 2000);
    });