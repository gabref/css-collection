import routes from './routes.js'

const route = (event) => {
    event = event || window.event
    event.preventDefault() // prevent <a> to navigate to the target
    // update the url on the browser
    window.history.pushState({}, "", event.target.href) 
    handleLocation()
}

// called every time change location happens
const handleLocation = async () => {
    const path = window.location.pathname

    const route = routes.get(path.replace('/css-collection', '')) || routes.get(404)

    document.title = route.title

    const html = await fetch(route.htmlPath)
        .then(async (data) => {
            return await data.text()
        })
    document.querySelector("#app").innerHTML = html

    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description)

    // css
    const head = document.getElementsByTagName('head')[0]
    const secondLink = document.getElementsByTagName('link')[1]
    if (secondLink)
        return secondLink.href = route.htmlPath.replace('index.html', 'style.css')

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = route.htmlPath.replace('index.html', 'style.css')
    head.append(link)
}

// back and forward button
window.onpopstate = handleLocation
// global access to our route function
window.route = route

handleLocation()
