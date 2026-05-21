---
layout: post
title: "Índices no PostgreSQL: quando e como usar"
date: 2025-05-18
categories: [banco-de-dados]
tags: [postgresql, sql, performance]
author: "Seu Nome"
---

Índices são a ferramenta mais poderosa para otimizar consultas em bancos de dados relacionais. Mas usados incorretamente, podem prejudicar a performance de escrita sem benefício real.

## Como um índice funciona

Um índice é uma estrutura de dados auxiliar (tipicamente uma B-Tree) que permite ao banco localizar linhas sem fazer um *sequential scan* na tabela inteira.

```sql
-- Verificar se uma query usa índice
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 42;

-- Criar um índice simples
CREATE INDEX idx_orders_customer ON orders(customer_id);

-- Índice composto (ordem importa!)
CREATE INDEX idx_orders_status_date ON orders(status, created_at DESC);
```

## Quando NÃO criar índices

- Tabelas pequenas (menos de ~10.000 linhas)
- Colunas com baixa cardinalidade (ex: booleano `ativo`)
- Tabelas com muitas escritas e poucas leituras
