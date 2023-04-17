const baseUrl = '/css-collection/pages/'
const routes = new Map([
    [404, {
        htmlPath: baseUrl + 'error/index.html',
        title: '404 | Css Collection',
        description: 'Error Page'
    }],
    ['/', {
        htmlPath: baseUrl + 'home/index.html',
        title: 'Home | Css Collection',
        anchorText: 'Home',
        description: 'Home Page'
    }],
    ['/about', {
        htmlPath: baseUrl + 'about/index.html',
        title: 'About | Css Collection',
        anchorText: 'About',
        description: 'About Page'
    }],
    ['/cards', {
        htmlPath: baseUrl + 'collection/cards/product-card-ui-design/index.html',
        title: 'Cards | Css Collection',
        anchorText: 'Cards',
        description: 'About Page'
    }],
    ['/logos/insta', {
        htmlPath: baseUrl + 'collection/logos/insta/index.html',
        title: 'Logos | Css Collection',
        anchorText: 'insta',
        description: 'About Page'
    }],
    ['/carousels/filled-carousel/', {
        htmlPath: baseUrl + 'collection/carousels/filled-carousel/index.html',
        title: 'Carousel | Css Collection',
        anchorText: 'carousel',
        description: 'About Page'
    }],
    ['/popups/', {
        htmlPath: baseUrl + 'collection/popups/index.html',
        title: 'Popups | Css Collection',
        anchorText: 'popup',
        description: 'About Page'
    }],
])

export default routes
