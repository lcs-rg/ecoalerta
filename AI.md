# AI.md — Documentação do Uso de IA

> Documento exigido pela disciplina de **Web Development** (Global Solution FIAP 2026.2).
> Sem a entrega deste arquivo, a nota da disciplina sofre desconto de 10 pontos.

## Ferramentas de IA utilizadas

| Ferramenta | Finalidade |
|---|---|
| opencode (assistente de código, modelo GLM) | Apoio na escrita e revisão do `js/script.js` (slideshow e validação do formulário) e nos estilos de estado (`.campo-invalido`, `.sucesso`) adicionados ao `css/style.css` |

## Prompts utilizados

1. *"Crie o js/script.js em JavaScript puro (ES6+) para a landing page EcoAlerta: slideshow com 3 imagens usando as classes `.slide`/`.ativo` e botões `.slide-anterior`/`.slide-proximo` já existentes no HTML, e validação do formulário `#form-alerta` impedindo envio de campos vazios, com e-mail verificado por regex, mensagens de erro inline criadas via DOM e feedback de sucesso após o envio."*
2. *"Adicione ao style.css os estilos dos estados gerados pelo JavaScript: borda vermelha para `.campo-invalido` e mensagem `.sucesso`."*
3. *"Revise o index.html e o style.css apontando pendências contra os requisitos do edital (recursos quebrados, scroll-margin-top para header sticky)."*

## Funcionalidades desenvolvidas com auxílio de IA

- `js/script.js` (arquivo completo): lógica do slideshow (navegação circular por operador de módulo) e validação do formulário (campos vazios, formato de e-mail, erros inline, feedback de sucesso).
- `css/style.css`: blocos `.campo-invalido` e `.sucesso` (estados visuais da validação).

## Funcionalidades desenvolvidas sem auxílio de IA

- `index.html` (estrutura semântica, seções, formulário, slideshow e rodapé) e o restante do `css/style.css` (variáveis, tipografia, Flexbox, responsividade) — escritos pelo integrante Lucas Rocha Guerra.

## Análise crítica

**Benefícios:** a IA acelerou a implementação da camada dinâmica e ajudou a padronizar a nomenclatura das classes com o HTML já existente; também serviu como revisora, apontando o recurso quebrado (`script.js` ausente) e o ajuste de `scroll-margin-top` para o menu fixo.

**Limitações:** a IA só enxerga o que é mostrado — sem o contexto completo do edital, não avalia critérios subjetivos de design; sugestões de CSS precisaram ser conferidas manualmente para manter a paleta em variáveis.

**Dificuldades encontradas:** integrar o script aos seletores já definidos no HTML exigiu conferir cada `querySelector`; e foi necessário validar manualmente o comportamento do formulário (teste de campos vazios, e-mail inválido e preenchimento correto) no navegador.

**Compromisso:** todos os integrantes leem e compreendem o `script.js`; o funcionamento de cada função (trocarSlide, emailValido, mostrarErro, limparErros) pode ser explicado em avaliação.
