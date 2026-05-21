---
layout: post
title: "Introdução ao Git: controle de versão na prática"
date: 2025-03-10
categories: [programacao]
tags: [git, versionamento, devtools]
author: "Seu Nome"
description: "Um guia prático e direto sobre os fundamentos do Git para desenvolvedores que estão começando."
---

Git é a ferramenta de controle de versão mais usada no mundo, e por boas razões. Neste artigo vamos cobrir os conceitos fundamentais que você precisa saber para começar a trabalhar com eficiência.

## Por que controle de versão importa

Imagine trabalhar em um projeto sem nenhuma forma de desfazer mudanças, colaborar com outros desenvolvedores ou entender o histórico de alterações no código. Seria caótico.

## Os três estados do Git

O Git organiza seu trabalho em três áreas principais:

- **Working directory**: onde você edita os arquivos
- **Staging area**: onde você prepara as mudanças para commit
- **Repository**: o histórico permanente de commits

## Comandos essenciais

```bash
# Inicializar um repositório
git init

# Adicionar arquivos ao staging
git add .

# Fazer um commit
git commit -m "feat: adiciona nova funcionalidade"

# Ver o histórico
git log --oneline
```

O domínio desses comandos é o ponto de partida para qualquer fluxo de trabalho moderno com Git.
