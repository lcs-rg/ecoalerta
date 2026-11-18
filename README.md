# EcoAlerta

> Tecnologia para prevenir riscos — Monitoramento do nível da água e alertas em áreas de risco.
> FIAP · Global Solution 2026.2 · Engenharia de Software — 1º ano (Agosto)

## 📋 Ficha da CitizenTech

| Campo | Descrição |
|---|---|
| **Nome da CitizenTech** | EcoAlerta |
| **Cidade e bairro** | São Paulo |
| **Cidadão beneficiado** | Moradores de áreas de risco, motoristas e motociclistas, pedestres e entregadores |
| **Problema, em uma frase** | Enchentes e alagamentos pegam a população desprevenida por falta de informação rápida e localizada sobre o nível da água |
| **Como funciona** | Sensor acompanha o nível da água → limites predefinidos classificam a situação → LEDs e buzzer sinalizam o risco localmente → plataforma web apresenta as informações (Atenção / Alerta / Emergência) |
| **O que cada parte faz** | **Lógica:** script Python processa dados e classifica o risco · **Matemática:** modelo de funções simula cenários de elevação · **Sensor:** circuito Wokwi (Arduino/ESP32) mede e reage · **Interface:** landing page em HTML/CSS · **Experiência:** requisitos e jornada do usuário · **Interação:** slideshow e validações em JavaScript · **Pitch:** videopitch de 3 minutos |
| **Link do repositório** | https://github.com/lcs-rg/ecoalerta |
| **Indicador de impacto** | Alertas emitidos, tempo de resposta (detecção → alerta) e pontos monitorados |
| **ODS conectados** | ODS 11 — Cidades e comunidades sustentáveis · ODS 13 — Ação contra a mudança global do clima |

## 🗂️ Estrutura

```
ecoalerta/
├── index.html    # Landing page (Front-end Design)
├── css/          # Estilos (variáveis, Flexbox, responsivo)
├── js/           # Slideshow e validações (Web Development)
└── img/          # Imagens do slideshow e ícones
```

## 👥 Equipe

| Integrante | RM | Papel |
|---|---|---|
| Lucas Rocha Guerra | 576845 | Front-end / Web Development |
| Felipe Alves Costa | 576247 | Lógica / Backend (Python) |
| Rodrigo Aljonas de Lima | 576916 | IoT / Hardware (Sensor) |
| Enzo Bertola Coraine | 574390 | Matemática / Design UX |

## 🚀 Entrega — Web Development (Front-end Dinâmico)

- **JavaScript puro** (sem frameworks): slideshow com 3 imagens, validação do formulário, régua de risco e painel de monitoramento via DOM
- **Repositório** com histórico de branches e merges para a `main`
- **`equipe.txt`** com integrantes, RMs e link do repositório
- **`AI.md`** com o registro do uso de IA e os prompts aplicados
- **Site publicado:** https://lcs-rg.github.io/ecoalerta/

---

*FIAP · Global Solution 2026.2 — CitizenTech*
