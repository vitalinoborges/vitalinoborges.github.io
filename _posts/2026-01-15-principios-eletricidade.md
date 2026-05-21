---
layout: post
title: "Princípios de eletricidade"
date: 2026-01-15
categories: [eletronica]
tags: [eletricidade, eletronica]
author: "Vitalino Borges"
description: "Uma análise dos fenômenos sem descrições matemáticas."
---

## Átomos

Toda matéria, independente de seu estado (sólido, líquido ou gasoso), é composta por **átomos**. E um átomo, por sua vez, é composto por **prótons, nêutrons e elétrons**.

Um átomo é uma partícula tão minúscula que, até recentemente, não existia um instrumento (como um super-microscópio) capaz de visualizá-lo (pois ele tem o tamanho de cerca de 0,2 nanômetros, e isso é muito, muito pequeno!).

> Para se ter uma ideia de como um átomo é pequeno, se fosse possível cair até o nível atômico dentro de um grão de areia, seria como pular de um avião a **2,5 km de altitude**. Como nessa cena do Homem-Formiga:
> <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/ant-man.gif' | relative_url }}" 
     alt="Foto de um átomo real feita por um microscópio quântico." 
     style="width: 60%;">

Hoje já existem alguns **microscópios quânticos** que conseguem visualizar coisas na ordem dos picômetros.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/atomo-real.png' | relative_url }}" 
     alt="Foto de um átomo real feita por um microscópio quântico." 
     style="width: 60%;">
 <figcaption>Foto de um átomo real feita por um microscópio quântico.</figcaption>
</figure>

Mas com base nos experimentos e observações dos cientistas há mais de 100 anos atrás, sem precisar de um microscópio quântico, o modelo de **Rutherford-Bohr** foi criado para trazer uma representação visual de um átomo. Este modelo nos ajuda a compreender a relação entre os elétrons e o núcleo atômico.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/bohr.png' | relative_url }}" 
     alt="Modelo visual de um átomo Rutherford Bohr." 
     style="width: 60%;">
 <figcaption>Modelo visual de um átomo Rutherford Bohr.</figcaption>
</figure>

> A real é que a movimentação dos elétrons em torno do núcleo não é tão perfeita como no modelo de Rutherford-Bohr, mas vamos nos ater a este modelo por ser mais didático e nos proporcionar uma boa ideia de como a eletricidade funciona.
> <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/atom.avif' | relative_url }}" 
     alt="Movimentação real dos elétrons em torno do núcleo." 
     style="width: 60%;">

Os prótons possuem linhas de força ao seu redor formando um **campo elétrico** dito como **positivo**. Eles repelem outros prótons, pois suas linhas de força são iguais e, portanto, incompatíveis.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/duas-cargas-positivas.png' | relative_url }}" 
     alt="Linhas de força entre dois prótons. Como eles são incompatíveis, eles se repelem." 
     style="width: 60%;">
 <figcaption>Linhas de força entre dois prótons. Como eles são incompatíveis, eles se repelem (observe o sentido das setas, de dentro para fora).</figcaption>
</figure>

Os elétrons também possuem um campo elétrico ao seu redor, mas as linhas de força tem um sentido diferente ao dos prótons. O campo elétrico dos elétrons é tido como **negativo**.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/eletrons.webp' | relative_url }}" 
     alt="Dois elétrons se repulsando." 
     style="width: 60%;">
 <figcaption>Dois elétrons se repulsando (observe o sentido das setas, de fora para dentro).</figcaption>
</figure>

Já os nêutrons são partículas que não possuem **campo elétrico** (mas são importantes para permitir que vários prótons consigam ficar juntos no núcleo de um átomo sem que se repilam).

Elétrons repelem elétrons, mas eles se **atraem a prótons**, pois as linhas de força dos dois são compatíveis.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/duas-cargas-negativas.png' | relative_url }}" 
     alt="Um próton se atraindo a um elétron, pois suas linhas de força são compatíveis." 
     style="width: 60%;">
 <figcaption>Um próton se atraindo a um elétron, pois o sentido das suas linhas de força são compatíveis.</figcaption>
</figure>

Estas mesmas linhas de força que atrai um elétron a um próton não permite que um "cole" no outro. Ou seja, faz com que o elétron sempre fique ao redor do próton, mas nunca "pregado" nele.

> A força de atração entre um próton e um elétron, ou a força de repulsão entre cargas iguais são calculadas pela **lei de Coulomb**.

Exatamente quantos prótons e quantos elétrons um átomo possui, vai depender de qual **elemento químico** estamos falando. 

* 1 elétron orbitando 1 próton constitui um átomo de **hidrogênio**.
* Se acrescentar mais 1 próton e mais 1 elétron ele se transforma em um átomo de **hélio**.
* Com 3 prótons e 3 elétrons temos o **lítio**, com 4 prótons e 4 elétrons, o **berílio**. Com 5 prótons e 5 elétrons, o **boro**... e assim os _elementos químicos_ vão se formando.
* Observa-se que a quantidade de elétrons é igual a quantidade de prótons de um átomo. Mas nem sempre é assim! Dependendo do elemento químico, da temperatura, e de outros fatores, a quantidade de elétrons de um átomo pode ser **menor** que a quantidade de prótons (mesmo que temporariamente).
* Um átomo é considerado **neutro** quando a quantidade de prótons e elétrons estão balanceados. **Mas se estiver faltando um elétron ele vai ficar sempre tentando atrair um novo elétron para voltar a ficar balanceado** (e isso é um ponto importante para entendermos a eletricidade).

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/elementos-quimicos.jpeg' | relative_url }}" 
     alt="Um próton se atraindo a um elétron, pois suas linhas de força são compatíveis." 
     style="width: 75%;">
 <figcaption>Exemplo dos cinco primeiros átomos de elementos químicos da tabela periódica. A quantidade de elétrons ao seu redor indica a quantidade de prótons em seu núcleo.</figcaption>
</figure>

> Mas se os prótons se repelem, como é possível que dois deles co-existam no núcleo, por exemplo, de um átomo de hélio? Na natureza, existem 4 tipos de _forças fundamentais_: gravidade, eletromagnetismo, **força nuclear forte** e força nuclear fraca. Esse "nuclear" vem de _núcleo_, e é justamente esse tipo de força que impede a repulsão dos prótons de um átomo. Existe toda uma explicação quântica para isto, mas, em resumo, os nêutrons, apesar de não possuir carga, influenciam nesta "força nuclear forte" para manter os prótons unidos.

Observa-se que quanto mais elétrons girando em torno do núcleo, mais **camadas** de elétrons vão surgindo. Logo, um átomo com muitos prótons possuirá também muitos elétrons orbitando em torno dele em várias camadas diferentes (camadas mais próximas do núcleo e camadas mais distantes do núcleo).

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/camadas-atomo.png' | relative_url }}" 
     alt="Átomo com três camadas de elétrons." 
     style="width: 40%;">
 <figcaption>Átomo com três camadas de elétrons.</figcaption>
</figure>

Existem elementos químicos com quantidades exageradas de prótons, elétrons e nêutrons, como o ouro (com 79 prótons e 79 elétrons), a prata (com 47 prótons e 47 elétrons), e o cobre (com 29 prótons e 29 elétrons).

> Até existem vários outros elementos químicos com muito mais elétrons e prótons, mas elementos acima de 84 prótons já são considerados elementos **radioativos** (devido a grande quantidade de energia retida em seus átomos), além de muitos não serem facilmente encontrados na natureza.

Os elétrons das camadas mais distantes do núcleo possui uma força de atração mais fraca, podendo se desprender do núcleo e partir para a órbita de outros átomos. Estes são os **elétrons livres**.

Os elétrons livres são mais presentes em materiais cujo elemento químico possui várias camadas de elétrons (como os já citados **ouro**, **prata** e **cobre**, por exemplo). Estes materiais que tem facilidade de comportar muitos elétrons livres são chamados de **materiais condutores**, e são justamente eles que são aproveitados como **meio** para _conduzir_  uma movimentação intensa e uniforme em um único sentido desses elétrons para uma direção, também conhecido como **corrente elétrica** (vamos falar mais disso agora a pouco).

Em temperaturas normais, os elétrons livres ficam se movimentando pelo material condutor (mas sem gerar corrente, pois são movimentações aleatórias onde o espaço por um é logo ocupado por outro).

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/eletrons-livres.gif' | relative_url }}" 
     alt="Elétrons livres se movimentando entre os átomos." 
     style="width: 40%;">
 <figcaption>Elétrons livres se movimentando entre os átomos.</figcaption>
</figure>


## Eletricidade estática

Entender o conceito de eletricidade estática é importante para compreendermos melhor os princípios de eletricidade.

Dependendo da tendência que um objeto tem de _perder_ ou _ganhar_ elétrons, caso ele seja **atritado** com outro material, uma _transferência de elétrons_ pode ocorrer fazendo com que um material fique com excesso de elétrons e o outro com um déficit de elétrons.

Exatamente quais materiais quando atritados irão gerar transferência de elétrons pode ser listados pela **série triboelétrica**:

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/triboeletrica.avif' | relative_url }}" 
     alt="Um próton se atraindo a um elétron, pois suas linhas de força são compatíveis." 
     style="width: 80%;">
 <figcaption>Um próton se atraindo a um elétron, pois suas linhas de força são compatíveis.</figcaption>
</figure>

Em tempos secos, o atrito de nossas roupas com o estofado do banco do carro pode fazer nossos corpos perderem elétrons. Ao encostar na lataria do carro, os elétrons livres da lataria tentarão repor o déficit de elétrons dos nossos corpos, gerando um choque.

Os raios são formados dentro das nuvens de tempestade devido ao acúmulo de cargas positivas na parte superior e de cargas negativas na parte inferior. Outra possibilidade são as cargas negativas acumuladas na parte inferior das nuvens se atraírem a carga positiva do solo.

Para lidar com os possíveis problemas gerados pela eletrostática no dia-a-dia (como choques ou queima de dispositivos eletrônicos sensíveis) o aterramento é a solução, oferecendo um caminho condutivo a terra (ou outro material eletricamente neutro).

* para evitar a queima de dispositivos, é recomendado o uso de pulseira eletrostática.
* caminhões tanque possuem aterramento para evitar acidentes durante abastecimento de postos de combustível.




## Diferença de potencial elétrico e formação da corrente

Quando dois pontos eletricamente neutros são ligados através de um fio condutor, nada acontecerá.

Da mesma forma, se dois pontos carregados de cargas negativas são ligados por um fio condutor, também nada acontecerá.

O mesmo será se dois pontos carregados positivamente forem ligados pelo fio.

Mas quando dois pontos com potencial elétrico diferentes (onde um ponto tem excesso de elétrons e outro ponto tem desfalque de elétrons) são ligados por um fio condutor, imediatamente um campo elétrico é formado por todo o fio como resultado do campo elétrico de cada elétron livre empurrando o próximo elétron livre pela repulsão das suas cargas.

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/campo-eletrico.gif' | relative_url }}" 
     alt="Campo elétrico formado em um fio quando a corrente elétrica resolve passar por ele." 
     style="width: 50%;">
 <figcaption>Campo elétrico formado em um fio quando a corrente elétrica resolve passar por ele.</figcaption>
</figure>

Mais informações sobre campo elétrico: https://www.if.ufrj.br/~dore/Fis3/origem.htm

Como um elétron livre empurra outro elétron livre assim que o circuito é fechado, instantaneamente todos os elétrons livres passam a marchar no sentido ao polo positivo, formando a **corrente elétrica**.

Apesar de paracer contraintuitivo, o fluxo de elétrons se movem do negativo para o positivo, mas o campo elétrico surge do positivo para o negativo, atraindo os elétrons para este sentido.

Com a movimentação dos elétrons pelo fio, um pequeno campo magnético também se forma sempre girando no sentido horário ao sentido da corrente convencional (regra da mão direita da Lei de Ampere).

Quando dois fios, um ao lado do outro, passam corrente em um mesmo sentido, o campo magnético de ambos se somam. Este princípio permite o funcionamento de eletroimãs, por exemplo.

Quando dois fios com corrente em direções opostas estão muito próximos, o campo magnético se anula.

Quanto maior a diferença de potencial entre os pontos, maior a intensidade da corrente. Essa intensidade é medida em **volts**.

Em um circuito de resistência fixa, quanto maior a tensão, maior a corrente.

A lei de Ohm mostra a relação entre tensão, corrente e resistência pela fórmula: **V = R x I**.

Em um cenário de resistência fixa, se quero dobrar a corrente, tenho que dobrar a tensão.

Para saber quantos volts são necessários para entregar certa potência exigida por um dispositivo, a seguinte fórmula é usada: V = P / I.

A corrente (medida em amperes) indica quanta energia um dispositivo precisa consumir para funcionar. A potência total de um dispositivo é a soma de todas as "subpotências" consumidas pelos componentes do circuito. Sua fórmula é: P = V x I.

Quando uma corrente passa por um fio, um campo magnético circular também é gerado. Com a regra da mão direita (lei de Ampere) é possível identificar o sentido da rotação do campo magnético.

Quando dois fios com corrente no mesmo sentido estão juntos, os campos magnéticos se somam. Se a corrente está em sentidos diferentes, o campo magnético se anula.

## Fontes de geração de eletricidade

## Circuitos e resistência

## Diagramas esquemáticos

<figure>
 <img src="{{ '/assets/images/posts/eletronica/principios-eletricidade/simbolos.jpg' | relative_url }}" 
     alt="Símbolos de componentes eletrônicos." 
     style="width: 50%;">
 <figcaption>Símbolos de componentes eletrônicos.</figcaption>
</figure>

## Indutor (bobina)

## Capacitor

## Semicondutores (diodos e transitores)

## Corrente alternada