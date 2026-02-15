// Inicializa o validador
const container = document.querySelector(".input-group");
const btnVoltar = document.querySelector('.voltar')
const submit = document.querySelector(".btn-continue");
const ou = document.querySelector(".ou");
const linkAccount = document.querySelector("#create");
const forgot = document.querySelector("#forgot");
const logo = document.querySelector(".logo");
const validator = new window.JustValidate("#login-form", {
  errorLabelCssClass: ["error-text"],
  errorFieldCssClass: "input-error",
  successLabelCssClass: ["valid"],
  onSuccessFieldCssClass: "sucess",
});

validator.addField("#username", [
  {
    rule: "required",
    errorMessage: "O nome é obrigatório",
  },

  {
    rule: "minLength",
    value: 3,
    errorMessage: "Mínimo de 3 caracteres",
  },
]);

validator
  .addField("#password", [
    {
      rule: "required",
      errorMessage: "Senha é obrigatório!",
    },
    {
      rule: "minLength",
      value: 4,
      errorMessage: "A senha precisa ter 4 digitos",
    },
  ])

  .onFail(() => {
    container.classList.add("has-error");
    submit.classList.add("btn-error");
    btnVoltar.classList.add('btnVoltar')
    ou.classList.add("ou-error");
    linkAccount.classList.add("no-create-account");
    forgot.classList.add("delete-forgot");
    logo.classList.add("esconder-logo");
    btnVoltar.classList.add('error-voltar')

  })

  .onSuccess((event) => {
    // Impede o envio real do formulário (sem POST)
    event.preventDefault();

    // envia o formulario
    event.currentTarget.submit();
    // Pega o valor do campo

    console.log("Validação bem-sucedida! Usuário:", username);
    console.log("Validação bem-sucedida! password:", password);

    // Aqui você pode disparar sua lógica (ex: abrir campo de senha ou chamar API)
    // alert(`Olá, ${username}! Prosseguindo para a próxima etapa...`);
    // alert(`Olá, ${password}! Prosseguindo para a próxima etapa...`);

    username.classList.add("username-name");
    submit.classList.add("btn-error");
    ou.classList.add("ou-error");
    linkAccount.classList.add("no-create-account");
    forgot.classList.add("delete-forgot");
    logo.classList.add("esconder-logo");
  });

