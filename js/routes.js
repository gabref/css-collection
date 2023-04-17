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
        description: 'Home Page'
    }],
    ['/about', {
        htmlPath: baseUrl + 'about/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
    ['/cards', {
        htmlPath: baseUrl + 'collection/cards/product-card-ui-design/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
    ['/logos/insta', {
        htmlPath: baseUrl + 'collection/logos/insta/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
    ['/carousels/filled-carousel/', {
        htmlPath: baseUrl + 'collection/carousels/filled-carousel/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
    ['/popups/filled-carousel/', {
        htmlPath: baseUrl + 'collection/popups/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
])

export default routes
