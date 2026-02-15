# user-authentication-system

 ## 👁️ Visão Geral
Desenvolvimento de um sistema de autenticação dinâmico, utilizando HTML5, CSS3 e JavaScript. O projeto foca em uma interface de usuário (UI) imersiva, com validações robustas em tempo real e estados visuais que se transformam de acordo com as interações do usuário.

## 🖥️ Descrição do Projeto
O User Authentication System é um módulo de login que prioriza o feedback visual. Utilizando a biblioteca JustValidate, o sistema valida credenciais antes do envio e manipula o DOM para reorganizar o layout em caso de erro, proporcionando uma experiência de usuário (UX) clara e intuitiva.

## 🎯 Objetivo
Aplicar conceitos avançados de manipulação de eventos em JavaScript, integração de bibliotecas externas e estilização condicional para criar um fluxo de login seguro e visualmente atraente.

## ⚙️ Funcionalidades
- Validação de Campos: Checagem obrigatória e de comprimento mínimo para usuário e senha.

- Transformação de Layout: Em caso de erro, a interface oculta elementos secundários (logo, links) e destaca o formulário com efeitos neon.

- Navegação Inteligente: Exibição condicional do botão "Voltar" apenas quando ocorre uma falha na validação.

- Interatividade: Inputs personalizados com ícones dinâmicos e feedbacks de foco/hover.

## 🎨 Design e Estilo
- Paleta de Cores: Azul profundo (#141936), amarelo (#f69c3b) e vermelho para estados de alerta.

- Efeitos Visuais: Gradientes lineares, sombras projetadas (box-shadow) e transições suaves de 1 segundo.

- Identidade: Visual moderno com tipografia clara e elementos centralizados.

## 🛠️ Tecnologias Utilizadas
- HTML5: Estrutura de formulário e marcação semântica.

- CSS3: Gerenciamento de estados, animações (keyframes) e variáveis (:root).

- JavaScript (ES6+): Lógica de controle, eventos de sucesso/falha e manipulação de classes CSS.

- JustValidate.js: Biblioteca externa via CDN para automação de regras de validação.

## 🏗️ Estrutura do  projeto 
``` plaintext
        user-authentication-system/
        │-- images/
        │   │   │-- capa-fundos.png
        │   │   │-- logo.png

        │-- icons/
        │   |   │-- adicionar.png
        │   |   │-- lock.svg
        │   |   │-- person.svg
        
        │-- styles/
        │   │-- style.css
        
        │-- scripts/
        │   │-- moviment.js
        
        │-- index.html


        │-- README.md

``` 

## Como usar  

```bash
  # Clone o repositório
  git clone https://github.com/Felipe-Loures/user-authentication-system.git
  cd user-authentication-system
```
## Inicialização
- Execução: Como o projeto utiliza caminhos relativos e bibliotecas via CDN, basta abrir o arquivo index.html em seu navegador.
- Dica: Utilize a extensão Live Server no VS Code para visualizar as transições e animações em tempo real.

## ✔ Conclusão
- Este sistema representa a união entre design centrado no usuário e engenharia de software moderna. O diferencial deste projeto reside na integração profunda com a biblioteca   JustValidate.js, que atua como a inteligência por trás da interface:

- Feedback Reativo: O Just-Validate não se limita a exibir mensagens de texto; ele serve como o motor que dispara as transformações do DOM, permitindo que a interface mude de um estado de "boas-vindas" para um estado de "alerta" instantaneamente.

- Integridade de Dados: Ao utilizar ganchos como onFail e onSuccess, garantimos que o backend nunca receba requisições inválidas, economizando recursos e prevenindo erros comuns de processamento.
  

- Experiência Premium: A capacidade da biblioteca de validar dados sem recarregar a página (AJAX-ready) eleva o padrão de usabilidade, transformando uma tarefa simples de login em uma jornada interativa e profissional.

- Este projeto é uma demonstração prática de como a manipulação de classes CSS via JavaScript, orquestrada por uma biblioteca de validação robusta, pode criar fluxos de navegação resilientes e esteticamente impecáveis.
  
## 📜 Licença 
Este projeto está sob a licença MIT.
  
Copyright © 2026 - Felipe Loures
