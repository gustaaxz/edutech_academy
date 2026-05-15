# 🎓 EduTech Academy

> Plataforma educacional responsiva e interativa oferecendo cursos na área de tecnologia e design.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Sobre o Projeto

**EduTech Academy** é um projeto prático de desenvolvimento front-end com o objetivo de construir uma plataforma de cursos online. A interface foi projetada com foco em **acessibilidade**, **usabilidade** e **design responsivo**, garantindo uma navegação fluida desde dispositivos móveis até desktops. 

O projeto conta com páginas dinâmicas, validação de formulários inteligente e integração com APIs externas.

## 🚀 Funcionalidades em Destaque

- 🌗 **Dark Mode Persistente:** Alternância de tema claro/escuro com salvamento de preferência do usuário via `LocalStorage`.
- 📱 **Design Responsivo:** Menu hambúrguer interativo e layouts que se adaptam perfeitamente a smartphones, tablets e desktops utilizando Media Queries.
- 📬 **Integração ViaCEP:** Formulário de matrícula com preenchimento automático de endereço a partir da busca do CEP utilizando a API pública ViaCEP.
- ✅ **Validação de Formulário:** Validação customizada em JavaScript para garantir dados corretos antes do envio, com feedback visual em tempo real.
- 📚 **Catálogo de Cursos:** Páginas exclusivas para cada área de estudo, como Data Science, Marketing, UI/UX Design e Desenvolvimento Web Full Stack.

## 📁 Estrutura do Projeto

```text
conteudo-atividade/
├── 📄 index.html                  # Página inicial principal
├── 📄 README.md                   # Documentação do projeto
├── 📄 Conteúdo Textual.pdf        # Material de apoio com os textos dos cursos
│
├── 📂 css/
│   └── 🎨 style.css               # Folha de estilos principal e variáveis CSS (Design System)
│
├── 📂 html/                       # Páginas detalhadas
│   ├── 📄 cursos.html             # Listagem geral
│   ├── 📄 curso-datascience.html  # Data Science
│   ├── 📄 curso-marketing.html    # Marketing
│   ├── 📄 curso-uiux.html         # UI/UX Design
│   └── 📄 curso-web.html          # Dev Web Full Stack
│
├── 📂 js/
│   └── ⚙️ script.js               # Lógica de validações, API ViaCEP e persistência de tema
│
└── 📂 assets/                     # Recursos visuais (Imagens e Vetores SVG)
```

## 🛠️ Tecnologias e Ferramentas

* **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** - Semântica estrutural e acessibilidade.
* **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Estilizações nativas, Flexbox, media queries e variáveis customizadas (Custom Properties).
* **[JavaScript (Vanilla)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Manipulação de DOM, consumo de APIs (Fetch API), assincronicidade (Async/Await) e armazenamento local (LocalStorage).
* **[ViaCEP](https://viacep.com.br/)** - Serviço externo para busca e validação de CEPs brasileiros.

## 💻 Como Executar o Projeto Localmente

O projeto não depende de bibliotecas externas ou frameworks complexos, sendo um desenvolvimento **Vanilla** nativo para navegadores.

1. **Clone o repositório** ou baixe o arquivo `.zip`.
   ```bash
   git clone https://github.com/gustaaxz/edutech_academy.git
   ```
2. **Navegue até o diretório** do projeto:
   ```bash
   cd conteudo-atividade
   ```
3. **Abra o arquivo principal**:
   Dê um duplo clique no arquivo `index.html` ou abra-o em seu navegador preferido.

> **💡 Dica:** Para uma melhor experiência durante o desenvolvimento, recomenda-se o uso da extensão **Live Server** no VS Code.

---
*Projeto concebido para aprofundamento prático em Design de Interfaces e Desenvolvimento Front-End Web.*
