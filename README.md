# ⚡ User Authentication System | Terminal Edition

## 👁️ Visão Geral
Sistema de autenticação leve e performático, focado em **Clean Code** e **UX reativa**. O projeto utiliza HTML5, CSS3 e JavaScript puro para criar uma interface de login estilo terminal, priorizando a semântica e a validação robusta de dados sem a necessidade de assets pesados.

## 🖥️ Descrição do Projeto
O **User Authentication System** é um módulo de segurança focado em acessibilidade e feedback em tempo real. Utilizando a biblioteca **JustValidate.js**, o sistema garante a integridade das credenciais (Usuário e Senha) através de um fluxo de controle de estado que manipula o DOM para oferecer respostas visuais imediatas.

## ⚙️ Funcionalidades Técnicas
- **Validação Modular:** Regras de obrigatoriedade e comprimento mínimo (min-length) aplicadas via engine externa.
- **Feedback Sensorial:** Implementação do efeito *Shake* (tremer) via CSS disparado por lógica JavaScript no evento de falha.
- **Gerenciamento de Estado:** Botão de submissão inteligente com bloqueio de cliques duplos (`disabled`) e alteração dinâmica de label para "AUTENTICANDO...".
- **UX Semântica:** Uso de placeholders descritivos (IDENTIFICAR USUÁRIO...) e suporte nativo a preenchimento automático (autocomplete).
- **Tradução Completa:** Interface e mensagens de erro 100% localizadas para PT-BR.

## 🎨 Design e Estilo (Pure CSS)
- **Tema Dark/Neon:** Estilização baseada em cores sólidas e variáveis CSS para facilitar a manutenção.
- **Micro-interações:** Transições suaves de foco e efeitos de profundidade aplicados diretamente via `box-shadow` e `border-radius`.
- **Layout Flexbox:** Estrutura centralizada e responsiva que se adapta a diferentes resoluções sem quebra de layout.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura de formulário limpa e marcação semântica.
- **CSS3:** Gerenciamento de estados e animações de erro (`keyframes`).
- **JavaScript (ES6+):** Lógica de controle de eventos e manipulação dinâmica de classes.
- **JustValidate.js:** Biblioteca via CDN para automação de regras de validação.

## 🏗️ Estrutura do  projeto 
``` plaintext
        user-authentication-system/
        ├── icons/ # Ícones SVG essenciais (Person, Lock)
        ├── styles/ # Estilização modular (style.css)
        ├── scripts/ # Lógica de validação (script.js)
        ├── index.html # Estrutura principal
        └── README.md # Documentação técnica
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
