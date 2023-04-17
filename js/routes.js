const routes = new Map([
    [404, {
        htmlPath: '/pages/error/index.html',
        title: '404 | Css Collection',
        description: 'Error Page'
    }],
    ['/', {
        htmlPath: '/pages/home/index.html',
        title: 'Home | Css Collection',
        description: 'Home Page'
    }],
    ['/about', {
        htmlPath: '/pages/about/index.html',
        title: 'About | Css Collection',
        description: 'About Page'
    }],
])

export default routes
