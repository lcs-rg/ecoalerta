/* ============================================================
   EcoAlerta — script.js
   Slideshow (3 imagens), validação do formulário, régua de
   risco ligada ao scroll, leitura simulada do sensor e painel
   de monitoramento. JavaScript puro (ES6+), sem frameworks.
   ============================================================ */

// Respeita a preferência do usuário por menos movimento
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== Slideshow ===== */

// Seleciona as imagens do slideshow, os botões e o contador "01/03"
const slides = document.querySelectorAll('.slide');
const botaoAnterior = document.querySelector('.slide-anterior');
const botaoProximo = document.querySelector('.slide-proximo');
const slideNumero = document.querySelector('#slide-num');

// Controla qual slide está visível (começa no primeiro)
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
  // Atualiza o contador da barra "REGISTRO 01/03"
  slideNumero.textContent = String(indiceAtual + 1).padStart(2, '0');
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

/* ===== Régua de risco (a página "enche" conforme o scroll) ===== */

// Elementos da régua lateral (desktop) e da barra (mobile)
const gauge = document.querySelector('#gauge');
const gaugeAgua = document.querySelector('#gauge-agua');
const gaugeLeitura = document.querySelector('#gauge-leitura');
const barraNivel = document.querySelector('#barra-nivel');

// Seções observadas pelo destaque do menu
const secoes = document.querySelectorAll('main section[id]');
const linksMenu = document.querySelectorAll('nav a');

// Escala oficial de risco: cada faixa de scroll é um nível
const NIVEIS = [
  { limite: 25, nome: 'normal' },
  { limite: 50, nome: 'atencao' },
  { limite: 75, nome: 'alerta' },
  { limite: 100, nome: 'emergencia' },
];

// Converte o percentual de scroll em um nível da escala
function nivelDoScroll(percentual) {
  for (const nivel of NIVEIS) {
    if (percentual <= nivel.limite) return nivel.nome;
  }
  return 'emergencia';
}

// Recalcula a "nível da água" da página e a seção visível
function atualizarNivel() {
  const alturaRolagem = document.documentElement.scrollHeight - window.innerHeight;
  const percentual = alturaRolagem > 0
    ? Math.min(100, Math.round((window.scrollY / alturaRolagem) * 100))
    : 0;

  // Régua lateral: coluna d'água sobe e a leitura acompanha
  gaugeAgua.style.height = percentual + '%';
  gaugeLeitura.style.bottom = percentual + '%';
  gaugeLeitura.textContent = percentual + '%';
  gauge.dataset.nivel = nivelDoScroll(percentual);

  // Barra superior (mobile): mesma informação
  barraNivel.style.width = percentual + '%';
  barraNivel.dataset.nivel = nivelDoScroll(percentual);

  // Scrollspy: marca no menu a seção que está na tela
  let secaoVisivel = '';
  secoes.forEach((secao) => {
    const area = secao.getBoundingClientRect();
    if (area.top <= window.innerHeight * 0.4 && area.bottom >= window.innerHeight * 0.4) {
      secaoVisivel = secao.id;
    }
  });
  linksMenu.forEach((link) => {
    link.classList.toggle('ativo', link.getAttribute('href') === '#' + secaoVisivel);
  });
}

// A leitura muda a cada rolagem e ao redimensionar a janela
window.addEventListener('scroll', atualizarNivel, { passive: true });
window.addEventListener('resize', atualizarNivel);
atualizarNivel();

/* ===== Leitura simulada do sensor (hero + painel) ===== */

// Escala da régua do painel: 0 a 2 m (marcador = metros / 2)
const ESCALA_MAXIMA = 2;

// Valores fictícios para demonstração (declarados na página).
// Limites da escala: Normal < 0,5 m | Atenção 0,5–1,0 m |
// Alerta 1,0–1,5 m | Emergência 1,5 m ou mais.
const LEITURAS = [
  { chuva: '33 mm/h', nivel: '0,38 m', metros: 0.38, status: 'normal' },
  { chuva: '45 mm/h', nivel: '0,87 m', metros: 0.87, status: 'atencao' },
  { chuva: '52 mm/h', nivel: '1,12 m', metros: 1.12, status: 'alerta' },
  { chuva: '27 mm/h', nivel: '0,64 m', metros: 0.64, status: 'atencao' },
  { chuva: '38 mm/h', nivel: '0,42 m', metros: 0.42, status: 'normal' },
];

const leituraChuva = document.querySelector('#leitura-chuva');
const leituraNivel = document.querySelector('#leitura-nivel');
const leituraStatus = document.querySelector('#leitura-status');
const painelNivel = document.querySelector('#painel-nivel');
const painelStatus = document.querySelector('#painel-status');
const painelMarcador = document.querySelector('#painel-marcador');
const painelHora = document.querySelector('#painel-hora');

let leituraIndice = 0;

// Formata a hora atual (a última leitura chegou "agora")
function horaAtual() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Troca os valores exibidos no hero e no painel de monitoramento
function atualizarLeitura() {
  const leitura = LEITURAS[leituraIndice % LEITURAS.length];
  const nomeStatus = leitura.status.charAt(0).toUpperCase() + leitura.status.slice(1);

  // Painel compacto do hero
  leituraChuva.textContent = leitura.chuva;
  leituraNivel.textContent = leitura.nivel;
  leituraStatus.textContent = nomeStatus;
  leituraStatus.dataset.nivel = leitura.status;

  // Painel operacional da seção Monitoramento
  painelNivel.textContent = leitura.nivel;
  painelStatus.textContent = nomeStatus;
  painelStatus.dataset.nivel = leitura.status;
  painelMarcador.style.left = (leitura.metros / ESCALA_MAXIMA * 100).toFixed(1) + '%';
  painelHora.textContent = horaAtual();

  leituraIndice++;
}

atualizarLeitura();

// A leitura "pulsa" a cada 4 s (desligada se o usuário pediu menos movimento)
if (!reduzirMovimento) {
  setInterval(atualizarLeitura, 4000);
}

/* ===== Entrada dos elementos durante o scroll ===== */

const alvosRevelar = document.querySelectorAll('.revelar');

// Com movimento reduzido, tudo já aparece pronto
if (reduzirMovimento) {
  alvosRevelar.forEach((alvo) => alvo.classList.add('visivel'));
} else {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target); // anima apenas uma vez
      }
    });
  }, { threshold: 0.15 });

  alvosRevelar.forEach((alvo) => observador.observe(alvo));
}
