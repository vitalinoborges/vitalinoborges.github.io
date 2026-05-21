---
layout: post
title: "Eletrônica analógica"
date: 2026-02-20
categories: [eletronica]
tags: [eletricidade, eletronica]
author: "Vitalino Borges"
description: "Usando um case prático para aprender de vez."
---

O estudo formal de eletricidade e eletrônica, com toda a sua carga teórica e descrições matemáticas, pode fazer muitas pessoas se sentirem distanciadas dos fenômenos práticos, não conseguindo ligar os conceitos com experimentos reais.

Durante um tempo fiquei pensando qual experimento didático é possível de ser feito para consolidar os principais conceitos de eletrônica analógica.

### O "hello world" da eletrônica
Hoje em dia, o "hello world" da eletrônica é fazer um pequeno **semáforo de leds**. Mas como fazer um da maneira mais simples possível?

Com o **Arduino** podemos fazer um semáforo mas, por mais legal que seja esse primeiro contato, ainda existem muitas **complexidades e abstrações** envolvidas em um simples piscar de leds: um software em C++ é compilado e armazenado em uma região da memória flash de um microcontrolador e este, por sua vez, através do processamento das múltiplas instruções do programa, controla a saída de tensão em determinados pinos do chip usados pelos leds.

Outra maneira mais simples de se criar um semáforo é usando **timer 555**. Aqui não temos mais um software e nem um microcontrolador. A frequência do piscar dos leds já é "programada" através da combinação de **resistências** e **capacitâncias**. Mas ainda sim temos um **chip abstraindo coisas** (com transistores, diodos e resistores dentro dele).

Então, será que existe uma forma de se criar um semáforo usando apenas transistores, capacitores, resistores, e leds?

Foi aí que encontrei o canal do "Burgos Eletrônica" no YouTube que apresentava um diagrama esquemático justamente do que eu estava procurando:

<figure>
 <img src="{{ '/assets/images/posts/eletronica/eletronica-analogica/diagrama.png' | relative_url }}" 
     alt="Diagrama esquemático de um semáforo simples no simulador de circuitos SimulIDE." 
     style="width: 75%;">
 <figcaption>Diagrama esquemático de um semáforo simples no simulador de circuitos SimulIDE.</figcaption>
</figure>

Com este experimento podemos ver na prática os conceitos de:

* análise de diagrama esquemático.
* circuito em série e paralelo.
* tensão.
* resistência e lei de Ohm.
* lei de kirchhoff.
* capacitância.
* transistor NPN.
* diodo emissor de luz.

**Basicamente, tudo que é estudado de forma teórica e isolada reunido em um único projeto prático!**

### Circuito na prática

Ao montar o circuito de acordo com o diagrama, teremos isto:

<figure>
 <img src="{{ '/assets/images/posts/eletronica/eletronica-analogica/semafaro.gif' | relative_url }}" 
     alt="Circuito real montado na protoboard."
     style="width: 35%;">
 <figcaption>Circuito real montado na protoboard.</figcaption>
</figure>

Observe que apesar de funcionar bem, a sequência dos LEDs não é a correta esperada por um semáforo.

Do jeito que está, o circuito liga o vermelho, depois o amarelo, depois o verde, e assim ele volta para o início.

O correto deveria ser: primeiro o vermelho, depois o verde, depois o amarelo, e volta para o início ligando o vermelho novamente.

Por enquanto, vamos nos contentar analisando o circuito apenas como está. Depois iremos fazer um pequeno ajuste para que a sequência saia como o esperado.

### Alimentação do circuito

### Divisão da corrente

### Resistências e lei de Ohm

### Transistor NPN

### Carregando e descarregando capacitores

### Acendendo LEDs

### Juntando tudo

### Ajustando a sequência de luzes