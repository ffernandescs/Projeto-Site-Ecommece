const route = (event) => {
    event = event || window.event
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    hanleLocation();
    console.log('clicou')
}

const routes = {
    404: '/404.html',
    '/': '/index.html',
    '/feminino': '/feminino.html',
    '/mais-vendidos': '/src/pages/site/produto.html',
}

const hanleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('mainPage').innerHTML = html
}

window.onpopstate = hanleLocation;
window.route = route;

hanleLocation();