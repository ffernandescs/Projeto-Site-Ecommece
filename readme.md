DEVSHOP • E-COMMERCE
Um gif apresentando o projeto

O projeto é um E-Commerce chamado DevShop que simula um site de vendas a qual possui roupas masculinas, femininas, joalherias e eletrônicos.

Confira a aplicação: https://shopdev.netlify.app/

📄 Explicação
O projeto é um E-Commerce chamado DevShop que simula um site de vendas a qual possui roupas masculinas, femininas, joalherias e eletrônicos. Nele foi consumido uma  API com  Axios, a qual possui alguns produtos de cada categoria acima para representar uma loja verídica.

A  API utilizada é a Fake Store API que é facilmente encontrada no Google através de uma pesquisa ou no GitHub do criador que está devidamente explicado. Ela possui algumas opções:

Produtos: São 20 produtos disponíveis. Ela dá a disponibilidade de visualizar todos os produtos, visualizar um produto em específico, limitar resultado dos produtos, classificar os resultados conforme o que escolher, adicionar novos produtos, atualizar valores dos produtos e deletar algum produto.

Categorias: Sâo 4 categorias no total, sendo elas: men's clothing, women's clothing, electronics e jewelery. Ela dá a disponibilidade de filtrar uma categoria em específico ou visualizar todas.

O visitante do site vai ser direcionado inicialmente para a página Inicial possui algumas seções, sendo elas: blocos com todas as categorias, banners em um Carousel, 8 produtos com a opção de ver todos e a seção parceiros que foram algumas pessoas que acompanharam todo o projeto do site.

Ao acessar uma das quatro categorias, sendo: Masculino, Feminino, Eletrônicos e Joalheria. A pessoa será direcionada para uma página que apresenta produtos apenas daquela categoria, ou seja, na categoria de eletrônicos não vai ter uma roupa, só se adicionar uma roupa que se encaixe com algo eletrônico.

Ao clicar em um dos produtos a pessoa terá a opção de selecionar quantos produtos serão adicionados e um botão para adicionar o(s) produto(s) no carrinho.

Ao enviar um produto no carrinho (Fica na parte superior direita do Header) você pode diminuir a quantidade dos produtos, mudar a loja a qual comprou, ver mais produtos ou finalizar a compra. Caso, clique em finalizar a compra será direcionado para a página de entrega que simula onde será entregado o produto. Ao preencher os campos tem a opção de continuar e finalmente chegar na página de pagamento, porém é apenas ilustrativa e não tem como pagar realmente, então por fim será direcionado para a página de doação.

Componentes:

O Header possui alguns menus para navegação, sendo: Produtos (Masculinos, Femininos, Joalheria e Eletrônicos), Nossa Política e Apoie-nos. Além de um campo de busca, opção de registro/login e o carrinho para armazenar os produtos que serão comprados.

Produtos: Aparece um menu dropdown que tem as 4 categorias com a opção de clicar em uma delas e ser direcionado para que foi desejada.

Nossa Política: É uma página que apresenta algumas políticas da loja, porém só os assuntos de cada política foram colocado e os parágrafos estão com o Lorem.

Apoie-nos: É uma página que o visitante pode apoiar o projeto com R$ 1,00. O nosso projeto ou a página de pagamento é fictícia e não tem a mínima intenção de fins lucrativos.

Campo de Busca: A pessoa pode pesquisar algum dos produtos nesse campo.

Registro/Login: O visitante tem como criar uma conta no site a qual será armazenada no Firebase e terá a opção de logar depois. A conta é criada com o nome, email, senha e confirmação de senha que possui um sistema de validação dos campos utilizado o Yup, ou seja, necessita colocar um email válido, colocar um nome que não possua números, senha de no mínimo 6 dígitos e a confirmação de senha deve ser igual em ambos campos.

O Loading foi criado para deixar mais fluído o tempo de espera do consumo da  API para localizar um item em específico e apresentar na página de Inspecionar.

O Cartão do Produto foi componentizado, pois possui no total de 20 produtos. Assim, facilitou em diminuir mais códigos. Ele apresenta a imagem do produto, o nome do produto, o preço, quantidade de unidades disponíveis, a avaliação e uma opção de inspecionar o produto que assim será direcionado para página de inspeção.

As estrelas que são um meio de avaliar os produtos, assim foi reutilizada em algumas páginas.

O carrinho de compras armazena os itens que serão comprados. Para armazenar precisa escolher o item desejado e clicar em adicionar no carrinho. Além disso, tem a opção de aumentar e diminuir a quantidade de produtos comprados, tem como remover o item do carrinho, mudar opções de lojas em diferentes regiões, ver mais produtos e por fim finalizar a compra e ser direcionado para página de entrega.

O WhatsApp é apenas ilustrativo. Porém, caso queria entrar em contato com algum de nós:

Kayke Alves Fujinaka: LinkedIn, GitHub, +55 11 96187-7936
João Guilherme Lima: LinkedIn, GitHub, +55 81 9169-3706

O Footer tem 3 seções.

A primeira mostra algumas características da loja, como, por exemplo: serviço de entrega em todo país, os meios de pagamento e uma opção de compra por WhatsApp;

A segunda oferece alguns meios de contato com os criadores do projeto, sendo as opções: LinkedIn, Email e Instagram. O Input que possui um placeholder escrito "Email" é apenas ilustrativo;

A última apresenta os direitos reservados aos criadores Kayke Fujinaka e João Guilherme.

📁 Páginas
O site tem no total 16 páginas, sendo elas:

Inicial: Página principal da loja que aprensenta diversos produtos.
Login: Página para logar o usuário no site.
Registro: Página para registrar o usuário no site.
Redefinir Senha: Página para redefinir a senha.
Produtos: A página mostra todos os produtos.
Pesquisa: A página mostra os produtos de acordo com o campo digitado na barra de pesquisas.
Masculino: A página mostra os produtos masculinos.
Feminino: A página mostra os produtos femininos.
Joalheria: A página mostra os produtos de joalheria.
Eletrônicos: A página mostra os produtos eletrônicos.
Nossa política: Apresenta as políticas (fictícias) da loja.
Apoie-nos: Uma página que tem a opção de contribuir conosco por via do Paypal.
Inspecionar Item: Ela mostra um item em específico para avaliar ou comprar.
Entrega: Página para informar em que local vai ser enviado o produto comprado.
Pagamento: Página para efetuar a compra.
Error 404: A página de Error 404 que acontece ao acessar uma rota inexistente.
🎯 Etapas
Versão 1.0: ✔️

✔️ Criação da Rotas;
✔️ Aplicação dos Estilos Globais;
✔️ Componente Header e Footer;
✔️ Consumo da API e Contexto da API;
✔️ Página de Login e Registro;
✔️ Página de Redefinição de Senha;
✔️ Responsividade no Login, Registro e Redefinição;
✔️ Aplicando os Produtos na Página Home;
✔️ Páginas Men, Women, Jewelery e Eletronics;
✔️ Consumindo API pela categoria;
✔️ Página de Inspect e Our Policy;
✔️ Carrinho de Compra no Header;
✔️ Responsivo Footer;
✔️ Página Search e Error 404;
✔️ Validação dos Input com Yup;
✔️ Header Fixo;
✔️ Adicionando as avaliações nos produtos;
✔️ Produtos adicionados no carrinho;
✔️ Opções de loja no carrinho;
✔️ Página de Entrega;
✔️ Página de Pagamento;
✔️ Carousel dos produtos na Home;
✔️ Arrumando Erro do Carrinho quando estava vazio;
✔️ Carousel com Banners na Home;
✔️ Seção de parceiros na HOme;
✔️ Autenticação com Firebase;
✔️ Página de Donate;
✔️ Vídeo do projeto;
✔️ Finalizado 1.0;

Versão 2.0: Em breve...

🚀 Tecnologias
No projeto foram utilizadas as seguintes tecnologias:

ReactJs
React Router
Styled-Components
React Hook Form
Yup
Axios
React icons
React-Multi-Carousel
SweetAlert2
Toastify
Firebase
📕 Requisitos
Antes de iniciar 🏁, você precisa ter Git e Node instalados.

🏁 Começando
# Clone this project
$ git clone https://github.com/Kayke-Fujinaka/E-commerce
# Access
$ cd e-commerce
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
Caso clone o projeto, você vai precisar criar o seu próprio projeto no firebase. Depois disso no arquivo .env irá colocar seu token do Firebase. Vou deixar um exemplo abaixo:

  REACT_APP_API_KEY="AIzah63dg9emUtIKmMCvrkSJLw-GZIl0a8qmEs",
  REACT_APP_AUTH_DOMAIN="example-8a13f.firebaseapp.com",
  REACT_APP_PROJECT_ID="example-8a13f",
  REACT_APP_STORAGE_BUCKET="example-88a13f.appspot.com",
  REACT_APP_MESSASING_SENDER_ID="65936679370",
  REACT_APP_APP_ID="1:659905779370:web:16c3ac97ef413h13ga2d3",
  REACT_APP_MEASUREMENT_ID: "G-BL1CGU42B6"
Depois disso passar para o arquivo que está o firebase. Por exemplo:

  const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
🤝 Colaboradores
Agradecemos às seguintes pessoas que contribuíram para este projeto:

Foto do Kayke Fujinaka no GitHub
Kayke Fujinaka	Foto do João Guilherme Lima
João Guilherme
📝 Licença
Este projeto está sob licença. Consulte o arquivo LICENSE para obter mais detalhes.

 

Volte para o topo