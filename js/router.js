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
    console.log('handleLocation')
    const path = window.location.pathname

    const route = routes.get(path) || routes.get(404)

    document.title = route.title

    const html = await fetch(route.htmlPath)
        .then((data) => data.text())
    document.querySelector("#app").innerHTML = html

    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description)
}

// back and forward button
window.onpopstate = handleLocation
// global access to our route function
window.route = route

handleLocation()
