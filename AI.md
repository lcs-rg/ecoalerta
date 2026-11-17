# AI.md — Documentação do Uso de IA

> Documento exigido pela disciplina de **Web Development** (Global Solution FIAP 2026.2).
> Sem a entrega deste arquivo, a nota da disciplina sofre desconto de 10 pontos.

## Ferramentas de IA utilizadas

| Ferramenta | Finalidade |
|---|---|
| opencode (assistente de código, modelo GLM) | Apoio na escrita e revisão do `js/script.js` (slideshow, validação do formulário, régua de risco por scroll e leitura simulada) e nos estilos associados do `css/style.css` |
| opencode (assistente de código, modelo GLM) | Redesign da identidade visual da landing page (direção "sinalização de defesa civil": paleta, tipografia Allerta Stencil/Archivo/IBM Plex Mono, régua de risco lateral, faixas de sinalização, hero com chuva animada) — reescrita de `index.html`, `css/style.css` e ampliação do `js/script.js` |
| Ferramenta de IA de imagens (escolhida pelo grupo) | Geração da ilustração 3D isométrica `img/hero-cidade-3d.webp` (cena de rua alagada com posto de monitoramento EcoAlerta e régua de nível). Integração no hero, otimização (WebP) e texto `alt` feitas com apoio do opencode |
| Ferramenta de IA de imagens (escolhida pelo grupo) | Geração de 4 cenas 3D diorama na mesma paleta do site: `img/problema-cena.webp` (vitrine da seção Problema) e `img/slide1.webp`/`slide2.webp`/`slide3.webp` (slideshow). Otimização (WebP), integração e textos `alt` feitas com apoio do opencode |

## Prompts utilizados

1. *"Crie o js/script.js em JavaScript puro (ES6+) para a landing page EcoAlerta: slideshow com 3 imagens usando as classes `.slide`/`.ativo` e botões `.slide-anterior`/`.slide-proximo` já existentes no HTML, e validação do formulário `#form-alerta` impedindo envio de campos vazios, com e-mail verificado por regex, mensagens de erro inline criadas via DOM e feedback de sucesso após o envio."*
2. *"Adicione ao style.css os estilos dos estados gerados pelo JavaScript: borda vermelha para `.campo-invalido` e mensagem `.sucesso`."*
3. *"Revise o index.html e o style.css apontando pendências contra os requisitos do edital (recursos quebrados, scroll-margin-top para header sticky)."*
4. *"Redesenhe a landing page EcoAlerta seguindo princípios de design autoral: identidade inspirada em sinalização de defesa civil e régua limnimétrica (régua de nível de água), paleta tempestade/papel/sirene, tipografia Allerta Stencil + Archivo + IBM Plex Mono, assinatura de régua de risco que sobe com o scroll, scrollspy no menu, chuva animada no hero (respeitando prefers-reduced-motion), mantendo os requisitos do edital FIAP (Flexbox, variáveis CSS, Google Fonts, textos curtos) e o conteúdo escrito pelo integrante."*
5. *"Expanda o js/script.js com a régua de risco (gauge) atualizada por scroll, barra de nível no mobile, scrollspy no menu e leitura simulada do sensor no hero."*
6. *"Teste de paleta solicitado pelo grupo: reconstruir a identidade usando apenas 3 cores (#000000, #FFFFFF, #CBF615), recolorindo todos os SVGs e codificando a escala de risco por intensidade do acento (contorno branco → contorno ácido → texto ácido → fundo ácido) já que uma única cor não codifica 4 níveis."*
7. *"Segundo teste de paleta solicitado pelo grupo: 3 cores (#081B40 tempestade, #FBE8CF papel de boletim, #FDAC2F alarme) — página clara com zonas de tempestade navy no hero/régua/rodapé, recolorindo os SVGs (ícones navy sobre creme, slides claros sobre navy) e regraduando a escala de risco por intensidade com regra de contraste: laranja nunca como texto sobre creme."*
8. *"Refinamento visual solicitado pelo grupo: remover a chuva animada do hero e adotar direção 'editorial lúdica' (referência Dribbble) — hero claro em creme, título gigante em Archivo 800/900 (Allerta Stencil apenas no logotipo), cantos arredondados em painéis/cartões/botões no lugar das faixas de sinalização, e as cenas 3D diorama exibidas como produto dentro de molduras navy arredondadas, mantendo a régua de risco, o scrollspy, o formulário, o slideshow e os requisitos do edital."*
9. *"Redesign 'equipamento de defesa civil': cantos retos, Allerta Stencil nos títulos, faixas diagonais como detalhe, composição assimétrica no hero com a cena 3D grande sangrando à direita, nova seção Monitoramento com painel operacional (nível, classificação, régua 0–2 m com marcador, sensores ativos, pontos e alertas — todos rotulados como demonstração), régua limnimétrica ampliada em CSS na seção Objetivos, identificação técnica EA-001/EA-P01/EA-B01 nos componentes, animações de entrada com IntersectionObserver em JS puro (sem GSAP, respeitando prefers-reduced-motion), mantendo as 5 seções exigidas pelo edital e o conteúdo escrito pelo integrante."*

## Funcionalidades desenvolvidas com auxílio de IA

- `js/script.js` (arquivo completo): lógica do slideshow (navegação circular por operador de módulo e contador do registro), validação do formulário (campos vazios, formato de e-mail, erros inline, feedback de sucesso), régua de risco atualizada por scroll (gauge lateral, barra mobile, scrollspy no menu), leitura simulada do sensor alimentando o hero e o painel de monitoramento (marcador na régua de 0–2 m e hora da última leitura) e animação de entrada dos elementos via IntersectionObserver.
- `css/style.css`: identidade visual completa — versão atual "equipamento de defesa civil" (cantos retos, Allerta Stencil nos títulos, faixas diagonais, hero assimétrico, painel operacional, régua limnimétrica ampliada, placas com identificação técnica), os estados da validação (`.erro`, `.campo-invalido`, `.sucesso`) e os estilos da régua de risco.
- `index.html`: reestruturação da marcação para a identidade (régua, hero assimétrico com etiqueta EA-001, nova seção Monitoramento com painel operacional, placa técnica na Tecnologia, régua ampliada nos Objetivos, IDs nos cards, barra de registro do slideshow) — **mantendo integralmente os textos e a estrutura das seções exigidas escritos pelo integrante**.

## Funcionalidades desenvolvidas sem auxílio de IA

- `index.html` (estrutura semântica, seções, formulário, slideshow e rodapé) e o restante do `css/style.css` (variáveis, tipografia, Flexbox, responsividade) — escritos pelo integrante Lucas Rocha Guerra.

## Análise crítica

**Benefícios:** a IA acelerou a implementação da camada dinâmica e ajudou a padronizar a nomenclatura das classes com o HTML já existente; também serviu como revisora, apontando o recurso quebrado (`script.js` ausente) e o ajuste de `scroll-margin-top` para o menu fixo.

**Limitações:** a IA só enxerga o que é mostrado — sem o contexto completo do edital, não avalia critérios subjetivos de design; sugestões de CSS precisaram ser conferidas manualmente para manter a paleta em variáveis.

**Dificuldades encontradas:** integrar o script aos seletores já definidos no HTML exigiu conferir cada `querySelector`; e foi necessário validar manualmente o comportamento do formulário (teste de campos vazios, e-mail inválido e preenchimento correto) no navegador.

**Compromisso:** todos os integrantes leem e compreendem o `script.js`; o funcionamento de cada função (trocarSlide, emailValido, mostrarErro, limparErros) pode ser explicado em avaliação.
