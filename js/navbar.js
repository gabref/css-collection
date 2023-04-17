import routes from './routes.js'

function addAnchorTag(text, href, parentId) {
    const a = document.createElement('a')
    a.innerText = text
    a.href = href
    a.onclick = window.route
    document.querySelector(`#${parentId}`).appendChild(a)
}

function createNavbar() {
    for (const [path, values] of routes) {
        if (values.anchorText)
            addAnchorTag(values.anchorText, '/css-collection' + path, 'main-nav')
            
    }
}

createNavbar()
