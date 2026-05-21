---
layout: post
title: "Docker na prática: containers para desenvolvedores"
date: 2025-04-15
categories: [devops]
tags: [docker, containers, infraestrutura]
author: "Seu Nome"
---

Containers revolucionaram a forma como desenvolvemos e entregamos software. Este guia cobre o essencial para começar a usar Docker no seu dia a dia.

## O que é um container?

Um container é uma unidade de software que empacota o código e todas as suas dependências, garantindo que a aplicação rode de forma consistente em qualquer ambiente.

```dockerfile
FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
CMD ["python", "app.py"]
```

## Comandos básicos

```bash
# Construir uma imagem
docker build -t minha-app .

# Rodar um container
docker run -p 8080:80 minha-app

# Listar containers em execução
docker ps
```
