// Inicializa o validador
const validator = new window.JustValidate('#login-form');
 
validator
  .addField('#username', [
    {

      rule: 'required',
      errorMessage: 'O nome é obrigatório',

    },
    
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Mínimo de 3 caracteres',
    },
  ])
  .onSuccess((event) => {
    // Impede o envio real do formulário (sem POST)
    event.preventDefault();
 
    // Pega o valor do campo
    const username = document.querySelector('#username').value;
 
    console.log('Validação bem-sucedida! Usuário:', username);
   
    // Aqui você pode disparar sua lógica (ex: abrir campo de senha ou chamar API)
    alert(`Olá, ${username}! Prosseguindo para a próxima etapa...`);
  });