# AI.md — Documentação do Uso de IA

> Documento exigido pela disciplina de **Web Development** (Global Solution FIAP 2026.2).
> Sem a entrega deste arquivo, a nota da disciplina sofre desconto de 10 pontos.

## Ferramentas de IA utilizadas

| Ferramenta | Finalidade |
|---|---|
| opencode (assistente de código, modelo GLM) | Apoio na escrita e revisão do `js/script.js` (slideshow, validação do formulário, régua de risco por scroll e leitura simulada) e nos estilos associados do `css/style.css` |
| opencode (assistente de código, modelo GLM) | Redesign da identidade visual da landing page (direção "sinalização de defesa civil": paleta, tipografia Allerta Stencil/Archivo/IBM Plex Mono, régua de risco lateral, faixas de sinalização, hero com chuva animada) — reescrita de `index.html`, `css/style.css` e ampliação do `js/script.js` |

## Prompts utilizados

1. *"Crie o js/script.js em JavaScript puro (ES6+) para a landing page EcoAlerta: slideshow com 3 imagens usando as classes `.slide`/`.ativo` e botões `.slide-anterior`/`.slide-proximo` já existentes no HTML, e validação do formulário `#form-alerta` impedindo envio de campos vazios, com e-mail verificado por regex, mensagens de erro inline criadas via DOM e feedback de sucesso após o envio."*
2. *"Adicione ao style.css os estilos dos estados gerados pelo JavaScript: borda vermelha para `.campo-invalido` e mensagem `.sucesso`."*
3. *"Revise o index.html e o style.css apontando pendências contra os requisitos do edital (recursos quebrados, scroll-margin-top para header sticky)."*
4. *"Redesenhe a landing page EcoAlerta seguindo princípios de design autoral: identidade inspirada em sinalização de defesa civil e régua limnimétrica (régua de nível de água), paleta tempestade/papel/sirene, tipografia Allerta Stencil + Archivo + IBM Plex Mono, assinatura de régua de risco que sobe com o scroll, scrollspy no menu, chuva animada no hero (respeitando prefers-reduced-motion), mantendo os requisitos do edital FIAP (Flexbox, variáveis CSS, Google Fonts, textos curtos) e o conteúdo escrito pelo integrante."*
5. *"Expanda o js/script.js com a régua de risco (gauge) atualizada por scroll, barra de nível no mobile, scrollspy no menu e leitura simulada do sensor no hero."*
6. *"Teste de paleta solicitado pelo grupo: reconstruir a identidade usando apenas 3 cores (#000000, #FFFFFF, #CBF615), recolorindo todos os SVGs e codificando a escala de risco por intensidade do acento (contorno branco → contorno ácido → texto ácido → fundo ácido) já que uma única cor não codifica 4 níveis."*
7. *"Segundo teste de paleta solicitado pelo grupo: 3 cores (#081B40 tempestade, #FBE8CF papel de boletim, #FDAC2F alarme) — página clara com zonas de tempestade navy no hero/régua/rodapé, recolorindo os SVGs (ícones navy sobre creme, slides claros sobre navy) e regraduando a escala de risco por intensidade com regra de contraste: laranja nunca como texto sobre creme."*

## Funcionalidades desenvolvidas com auxílio de IA

- `js/script.js` (arquivo completo): lógica do slideshow (navegação circular por operador de módulo e contador do registro), validação do formulário (campos vazios, formato de e-mail, erros inline, feedback de sucesso), régua de risco atualizada por scroll (gauge lateral, barra mobile, scrollspy no menu) e leitura simulada do sensor no hero.
- `css/style.css`: identidade visual completa da versão "sinalização de defesa civil" (paleta, tipografia, régua, faixas, hero com chuva) e os blocos de estados da validação (`.erro`, `.campo-invalido`, `.sucesso`).
- `index.html`: reestruturação da marcação para a nova identidade (régua, hero com chuva, etiquetas de seção, fluxo 01–04, escala de risco, barra de registro do slideshow) — **mantendo integralmente os textos e a estrutura de seções escritos pelo integrante**.

## Funcionalidades desenvolvidas sem auxílio de IA

- `index.html` (estrutura semântica, seções, formulário, slideshow e rodapé) e o restante do `css/style.css` (variáveis, tipografia, Flexbox, responsividade) — escritos pelo integrante Lucas Rocha Guerra.

## Análise crítica

**Benefícios:** a IA acelerou a implementação da camada dinâmica e ajudou a padronizar a nomenclatura das classes com o HTML já existente; também serviu como revisora, apontando o recurso quebrado (`script.js` ausente) e o ajuste de `scroll-margin-top` para o menu fixo.

**Limitações:** a IA só enxerga o que é mostrado — sem o contexto completo do edital, não avalia critérios subjetivos de design; sugestões de CSS precisaram ser conferidas manualmente para manter a paleta em variáveis.

**Dificuldades encontradas:** integrar o script aos seletores já definidos no HTML exigiu conferir cada `querySelector`; e foi necessário validar manualmente o comportamento do formulário (teste de campos vazios, e-mail inválido e preenchimento correto) no navegador.

**Compromisso:** todos os integrantes leem e compreendem o `script.js`; o funcionamento de cada função (trocarSlide, emailValido, mostrarErro, limparErros) pode ser explicado em avaliação.
