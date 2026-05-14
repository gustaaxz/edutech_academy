const nome_input = document.getElementById('nome');
const email_input = document.getElementById('email');
const telefone_input = document.getElementById('telefone');
const cpf_input = document.getElementById('cpf');
const curso_input = document.getElementById('curso');
const cep_input = document.getElementById('cep');
const rua_input = document.getElementById('rua');
const bairro_input = document.getElementById('bairro');
const cidade_input = document.getElementById('cidade');
const estado_input = document.getElementById('estado');

// Dark Mode / Light Mode
const themeToggles = document.querySelectorAll("#theme-toggle");
const body = document.body;

themeToggles.forEach(toggle => {
    toggle.addEventListener("click", function() {
        body.classList.toggle("modo-escuro");
    });
});