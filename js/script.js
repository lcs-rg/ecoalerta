/* ============================================================
   EcoAlerta — script.js
   Slideshow (3 imagens) e validação do formulário de cadastro.
   Desenvolvido em JavaScript puro (ES6+), sem frameworks.
   ============================================================ */

/* ===== Slideshow ===== */

// Seleciona todas as imagens do slideshow e os botões de navegação
const slides = document.querySelectorAll('.slide');
const botaoAnterior = document.querySelector('.slide-anterior');
const botaoProximo = document.querySelector('.slide-proximo');

// Controla qual slide está visível no momento (começa no primeiro)
let indiceAtual = 0;

/**
 * Exibe o slide informado e oculta os demais.
 * O módulo (%) faz a navegação "dar a volta": após o último slide,
 * volta para o primeiro; antes do primeiro, vai para o último.
 */
function trocarSlide(novoIndice) {
  slides[indiceAtual].classList.remove('ativo'); // oculta o slide atual
  novoIndice = (novoIndice + slides.length) % slides.length;
  slides[novoIndice].classList.add('ativo'); // exibe o novo slide
  indiceAtual = novoIndice;
}

// Botões avançam ou retrocedem um slide a partir do índice atual
botaoAnterior.addEventListener('click', () => trocarSlide(indiceAtual - 1));
botaoProximo.addEventListener('click', () => trocarSlide(indiceAtual + 1));

/* ===== Validação do formulário de cadastro ===== */

const form = document.querySelector('#form-alerta');
const campos = form.querySelectorAll('input');

// Expressão regular simples: texto@texto.texto (sem espaços)
function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Remove as mensagens de erro e os destaques vermelhos dos campos
function limparErros() {
  form.querySelectorAll('.erro').forEach((aviso) => aviso.remove());
  campos.forEach((campo) => campo.classList.remove('campo-invalido'));
  const sucessoAnterior = form.querySelector('.sucesso');
  if (sucessoAnterior) sucessoAnterior.remove();
}

// Cria e insere uma mensagem de erro logo abaixo do campo inválido
function mostrarErro(campo, mensagem) {
  const aviso = document.createElement('small');
  aviso.className = 'erro';
  aviso.textContent = mensagem;
  campo.insertAdjacentElement('afterend', aviso);
  campo.classList.add('campo-invalido');
}

// Intercepta o envio do formulário para validar antes de "enviar"
form.addEventListener('submit', (evento) => {
  evento.preventDefault(); // impede o recarregamento da página
  limparErros();

  let formValido = true;

  campos.forEach((campo) => {
    const valor = campo.value.trim(); // ignora espaços em branco

    if (valor === '') {
      // Regra 1: nenhum campo pode ficar vazio
      mostrarErro(campo, 'Preencha este campo.');
      formValido = false;
    } else if (campo.type === 'email' && !emailValido(valor)) {
      // Regra 2: e-mail precisa ter formato válido
      mostrarErro(campo, 'Informe um e-mail válido.');
      formValido = false;
    }
  });

  if (formValido) {
    form.reset(); // limpa os campos preenchidos

    // Feedback visual de sucesso para o usuário
    const sucesso = document.createElement('p');
    sucesso.className = 'sucesso';
    sucesso.textContent = 'Cadastro realizado! Você receberá os alertas do EcoAlerta.';
    form.insertAdjacentElement('afterbegin', sucesso);
  }
});

// Enquanto o usuário digita, o erro do campo desaparece
campos.forEach((campo) => {
  campo.addEventListener('input', () => {
    campo.classList.remove('campo-invalido');
    const aviso = campo.parentElement.querySelector('.erro');
    if (aviso) aviso.remove();
  });
});
