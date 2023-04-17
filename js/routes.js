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
])

export default routes
