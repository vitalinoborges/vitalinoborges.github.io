# Jekyll Serif Blog

Template Jekyll para blog técnico com:
- **Tipografia serifada** (Lora) otimizada para leitura
- **Página inicial** organizada por categorias com listas de artigos
- **Syntax highlighting** com tema escuro (Catppuccin Mocha)
- Compatível 100% com **GitHub Pages**
- Dark/light: pronto para adicionar (CSS variables preparadas)
- Sidebar com recentes, categorias e tags

## Início rápido

### 1. Pré-requisitos

```bash
ruby -v   # >= 2.7
gem install bundler jekyll
```

### 2. Instalar dependências

```bash
bundle install
```

### 3. Rodar localmente

```bash
bundle exec jekyll serve --livereload
# Acesse http://localhost:4000
```

## Personalização

### Configuração principal (`_config.yml`)

```yaml
title: "Nome do seu blog"
description: "Descrição do blog"
author: "Seu Nome"

# Categorias exibidas no index
featured_categories:
  - slug: programacao
    label: "Programação"
  - slug: devops
    label: "DevOps"
```

### Adicionar uma nova categoria

1. Adicione à lista `featured_categories` em `_config.yml`
2. Crie o arquivo de página em `categorias/nome-da-categoria.md`:

```yaml
---
layout: category
title: Nome da Categoria
category: nome-da-categoria
category_label: Nome da Categoria
permalink: /categorias/nome-da-categoria/
---
```

### Criar um novo post

Crie um arquivo em `_posts/` com o formato `AAAA-MM-DD-titulo.md`:

```yaml
---
layout: post
title: "Título do Artigo"
date: 2025-06-01
categories: [programacao]        # deve corresponder ao slug da categoria
tags: [python, tutorial]
author: "Seu Nome"
description: "Descrição curta para SEO."
---

Conteúdo em Markdown aqui...
```

### Personalizar cores (`_sass/_variables.scss`)

As principais variáveis de cor:

```scss
$color-bg:     #faf8f4;   // fundo da página
$color-accent: #b85c38;   // cor de destaque (links, títulos, acento)
$color-text:   #1a1714;   // texto principal
```

### Personalizar a fonte

No `_layouts/default.html`, substitua o link do Google Fonts. Boas opções serifadas:
- **Lora** (atual) — elegante, ótima para leitura em tela
- **Playfair Display** — mais impactante, boa para títulos
- **Libre Baskerville** — clássica, muito legível
- **Merriweather** — desenhada especificamente para telas

## Deploy no GitHub Pages

1. Crie um repositório público no GitHub
2. Faça push do projeto
3. Em **Settings → Pages**, selecione a branch `main` e pasta raiz `/`
4. O site estará disponível em `https://usuario.github.io/repositorio`

## Estrutura do projeto

```
.
├── _config.yml          # Configuração principal
├── _layouts/
│   ├── default.html     # Layout base
│   ├── post.html        # Layout de artigo
│   └── category.html    # Layout de página de categoria
├── _includes/
│   ├── header.html
│   └── footer.html
├── _sass/
│   ├── _variables.scss  # Cores, fontes, espaçamentos
│   ├── _base.scss       # Reset e elementos base
│   ├── _layout.scss     # Estrutura de grid e regiões
│   ├── _typography.scss # Estilos de texto e post
│   ├── _syntax.scss     # Highlighting de código
│   └── _components.scss # Componentes reutilizáveis
├── _posts/              # Seus artigos em Markdown
├── assets/
│   ├── css/main.scss    # Entrada SCSS
│   └── js/main.js       # JavaScript
├── categorias/          # Páginas de cada categoria
├── index.html           # Página inicial
├── sobre.md             # Página sobre
└── Gemfile
```

## Licença

MIT — use e adapte livremente.
