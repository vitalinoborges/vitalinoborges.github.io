---
layout: post
title: "Princípios SOLID explicados com exemplos reais"
date: 2025-05-01
categories: [arquitetura]
tags: [solid, oop, design-patterns]
author: "Seu Nome"
---

Os princípios SOLID são a base para escrever código orientado a objetos que seja fácil de manter e estender. Vamos ver cada um com exemplos concretos.

## S — Single Responsibility

Uma classe deve ter um único motivo para mudar. Isso não significa que ela deve fazer apenas uma coisa, mas que todas as coisas que ela faz devem estar relacionadas a uma única responsabilidade.

```python
# Ruim: a classe faz coisas demais
class User:
    def save_to_db(self): ...
    def send_email(self): ...
    def generate_report(self): ...

# Melhor: responsabilidades separadas
class UserRepository:
    def save(self, user): ...

class UserNotifier:
    def send_welcome_email(self, user): ...
```

## O — Open/Closed

Classes devem estar abertas para extensão, mas fechadas para modificação. Use herança e composição em vez de alterar código existente.
