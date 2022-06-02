# PROJETO • E-COMMERCE

<img src="./assets/img/2022-06-02-16-54-20.gif" alt="Um gif apresentando o projeto"/>
<img src="./assets/img/2022-06-02-16-57-35.gif" alt="Um gif apresentando o projeto"/>

>  O projeto é um site E-Commerce na qual simula um site de vendas de perfumarias e produtos de beleza.

Link da aplicação: https://ecoolmmecebe.netlify.app/ <br>

## :page_facing_up: Explicação

O projeto é um site E-Commerce na qual simula um site de vendas de perfumarias e produtos de beleza. Neste projeto foi criado um CRUD para ambiente administrativo onde é possivel adicionar, editar e excluir produtos, categorias e marcas.
Tambem foi criado um ambiente para alterar os dados estaticos da pagina como: Logo, e informações no Footer(Endereço, Telefone, Link´s de Rede Sociais, campo Sobre, Politica de Trocas dentre outos).
Todo armazenamento de dados como informações estaticas, nomes de marcas, categorias, produtos e imagem, esta vinculado ao banco de dados Firebase, onde foi feita toda comunicação e criação de documents no ambiente firestore para armazenamento das informações.

- Produtos: Na pagina inicial temos duas categorias de produtos onde foi criado um carrosel, esses produtos são adicionados pelo ambiente Administrativo ultizando as categorias, Lançamentos e Promoções.

- Categorias: As categorias vistas no menu principal ira mostrar 20 produtos, onde foi ultilizado o metodo (URLSearchParams) para passar paramentros via URL e assim exibir os produtos com suas respectivas categorias ja cadastrada no ambiente administrativo.

Entrando no site voçê sera direcionado inicialmente para a página Inicial onde possui algumas seções, sendo elas: Menu com exibindo as categorias, banners em um Carousel, lista de produtos em carrosel com setas de posição para ver mais produtos.

Ao acessar as categorias, a pessoa será direcionada para uma página que apresenta produtos apenas daquela categoria, ou seja.

Ao clicar em um dos produtos a pessoa sera redirecionada para uma pagina contendo as informações deste produto como: codigo, preço, desconto, parcelas e descrição. 


## :rocket: Tecnologias ##

No projeto foram utilizadas as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Firebase](https://firebase.google.com/docs)

