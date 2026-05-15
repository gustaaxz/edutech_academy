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
const submit_button = document.getElementById('submit-button');
 
const themeToggles = document.querySelectorAll(".theme-toggle");
const body = document.body;
 
themeToggles.forEach(toggle => {
    toggle.addEventListener("click", function() {
        body.classList.toggle("modo-escuro");
        const modoEscuroAtivo = body.classList.contains("modo-escuro");
        localStorage.setItem('modo-escuro', modoEscuroAtivo);
    });
});
 
const temaRecuperado = localStorage.getItem('modo-escuro');
 
if (temaRecuperado === 'true') {
    body.classList.add('modo-escuro');
}
 
const campos_validacao = [
    { id: 'nome', error_id: 'error-name', mensagem: 'Por favor, preencha o nome completo' },
    { id: 'email', error_id: 'error-email', mensagem: 'Por favor, informe um e-mail válido', tipo: 'email' },
    { id: 'telefone', error_id: 'error-telefone', mensagem: 'Por favor, informe o número de telefone' },
    { id: 'cpf', error_id: 'error-cpf', mensagem: 'Por favor, informe o CPF corretamente' },
    { id: 'curso', error_id: 'error-course', mensagem: 'Por favor, selecione um curso' },
    { id: 'cep', error_id: 'error-cep', mensagem: 'Por favor, informe o CEP' },
    { id: 'rua', error_id: 'error-rua', mensagem: 'Por favor, informe a rua' },
    { id: 'bairro', error_id: 'error-bairro', mensagem: 'Por favor, informe o bairro' },
    { id: 'cidade', error_id: 'error-cidade', mensagem: 'Por favor, informe a cidade' },
    { id: 'estado', error_id: 'error-estado', mensagem: 'Por favor, informe o estado' }
];
 
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
 
const limparErro = (error_id) => {
    const errorElement = document.getElementById(error_id);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
};
 
const exibirErro = (error_id) => {
    const errorElement = document.getElementById(error_id);
    if (errorElement) {
        errorElement.style.display = 'block';
    }
};
 
const validarCampo = (campo) => {
    const elemento = document.getElementById(campo.id);
    const valor = elemento.value.trim();
 
    if (valor === '') {
        exibirErro(campo.error_id);
        return false;
    }
 
    if (campo.tipo === 'email' && !validarEmail(valor)) {
        exibirErro(campo.error_id);
        return false;
    }
 
    limparErro(campo.error_id);
    return true;
};
 
campos_validacao.forEach(campo => {
    const elemento = document.getElementById(campo.id);
    if (elemento) {
        elemento.addEventListener('input', () => {
            limparErro(campo.error_id);
        });
    }
});
 
const validarFormulario = () => {
    let formularioValido = true;
    campos_validacao.forEach(campo => {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });
    return formularioValido;
};
 
submit_button.addEventListener('click', (event) => {
    event.preventDefault();
    if (validarFormulario()) {
        alert('Formulário enviado com sucesso!');
    }
});
 
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
};
 
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro || '';
    document.getElementById('bairro').value = endereco.bairro || '';
    document.getElementById('cidade').value = endereco.localidade || '';
    document.getElementById('estado').value = endereco.uf || '';
};
 
const pesquisarCEP = async () => {
    limparFormulario();
 
    const cepInput = document.getElementById('cep');
    const cep = cepInput.value.replace(/\D/g, '');
 
    if (cep.length !== 8) {
        alert('Por favor, digite um CEP válido com 8 números.');
        return;
    }
 
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const resposta = await fetch(url);
        const dados = await resposta.json();
 
        if (dados.erro) {
            alert('CEP não encontrado na base de dados.');
            return;
        }
 
        preencherFormulario(dados);
        limparErro('error-cep');
 
    } catch (erro) {
        alert('Erro ao conectar com o serviço de CEP.');
        console.error(erro);
    }
};
 
document.getElementById('cep').addEventListener('blur', pesquisarCEP);
 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        alert('Formulário enviado com sucesso!');
    }
});
