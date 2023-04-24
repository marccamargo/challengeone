
Codificador e Decodificador de texto - Utilizando HTML, CSS e JavaScript

Este é o primeiro challenge desenvolvido durante o programa ONE - Oracle Next Education, com o objetivo de colocar em prática os conteúdos estudados. O desafio consiste em criar um codificador/decodificador de texto utilizando conhecimentos em HTML, CSS e JavaScript adquiridos durante as aulas. Foram disponibilizados cards no Trello para orientar e gerenciar o desenvolvimento do projeto e um modelo proposto de estilização no Figma.

Meu projeto
Organizei o meu código em pastas. A pasta Assets em que coloquei mais três pastas: 
A pasta css que contém o arquivo style.css
A pasta js que contém o arquivo script.js
A pasta images que contém as imagens que foram usadas no projeto.
Logo abaixo, coloquei o index.html contendo toda a estrutura do projeto.

Na estrutura HTML modifiquei:
O ícone, o título e a descrição da página;
O ícone de informação em aviso de "apenas letras minúsculas e sem acento";
A mudança das imagens nos containers que mostra o resultado da codificação/decodificação para readonly, pois caso o usuário  não digitasse algo nela(recebe um alerta para digitar um texto), digitando um texto e clicando em encriptar(Texto encriptado com sucesso) e clicando em desencriptar(Texto desencriptado com sucesso);
o footer, onde adicionei meu nome e redes sociais;
No CSS modifiquei:
A fonte para "Inter" de acordo com a proposta , seu tamanho e o espaçamento das linhas usando o gap;
As cores do fundo (#08212e;#495057;#f3f5fc;#E5E5E5;#0a3871;#0a3851;#343a40 ) e das sombras;
As animações dos links e dos botões (hover, opacity);
A imagem de fundo da textarea quando não há texto inserido (:placeholder-shown);
O layout da página para dispositivos móveis(Responsividade);
No JavaScript:
Criei a função de encriptar usando  let document.getElementById("").value, depois usando o replace para mudar os caracteres  e as condicionais if(texto.length !=0) e else;
Criei a função de desencriptar  usando a mesma lógica da funçao encriptar só que , no replace, invertendo os caracteres;
Criei uma função para mostrar uma mensagem de erro caso não fosse inserido texto;
