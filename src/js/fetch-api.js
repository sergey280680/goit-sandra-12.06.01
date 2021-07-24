import markup from '../templates/markup.hbs'
import refs from "./refs.js"

const {list, form, loadMore} = refs




// fetch(url, options).then((response) => {
//     return response.json()
// }).then((data) => {
//     return data.photos
// }).then(photos => {
//     // console.log(photos);
// })

// async function getFetch() {
//     const response = await fetch(url, options)
//     console.log(response);
//     const data = await response.json()
//     console.log(data);
//     const photos = await data.photos
//     console.log(photos);
// }

function getFetchFunction() {

    let queryValue = ''
    function setQuery(value) {
        console.log(value);
       return queryValue = value
   }
    let page = 1
    let perPage = 5
    function setPage(value) {
        return page = value
    }
    function setPerPage(value) {
        return perPage = value
    }
    const API_KEY = '563492ad6f91700001000001481853ffd8dd462bba7de91b84b8ef1d'
    const BASE_URL = 'https://api.pexels.com/'
    

    const options = {
        method: 'GET',
        headers: {
            Authorization: API_KEY
        }
    }

    async function getFetch() {
        let queryParams = `v1/search?query=${queryValue}&per_page=${perPage}&page=${page}`
    let url = BASE_URL+queryParams
       try {
       const response = await fetch(url, options)
        // console.log(response);
        const data = await response.json()
        // console.log(data);
        const photos = await data.photos
        // console.log(photos);
        addMarkup(markup, photos)
    } catch (error) {
        console.error(error)
    }
   }

    
    return {setQuery, getFetch}
}

function addMarkup(markup, data) {
    const items = markup(data)
    list.insertAdjacentHTML("afterbegin", items)
    return list
}

console.log(form);

const createFetch = getFetchFunction()
// console.log(createFetch);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    list.innerHTML = ''
    let query = e.target.elements.name.value
    createFetch.setQuery(query)
    createFetch.getFetch()
    form.reset()


})

loadMore.addEventListener('click', () => {
    // 
})