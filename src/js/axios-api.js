import axios from 'axios';
const query = 'cat'
let queryParams = `v1/search?query=${query}`

axios.defaults.baseURL = 'https://api.pexels.com/'
axios.defaults.headers.common.Authorization = '563492ad6f91700001000001481853ffd8dd462bba7de91b84b8ef1d'

console.dir(axios);

// axios.get(`${queryParams}`).then((response) => {
//     return response.data
// }).then((data) => {
//     return data.photos
// }).then((array) => {
//     return array
// })

async function getFetch() {
    const response = await axios.get(`${queryParams}`)
    console.log(response);
    const data = await response.data
    console.log(data);
    const array = await data.photos
    console.log(array);

    // try {
    //     const response = await axios.get(`${queryParams}`)
    // console.log(response);
    // const data = await response.data
    // console.log(data);
    // const array = await data.photos
    // console.log(array);
    // } catch (error) {
    //     console.error(error);
    // }


}

getFetch()

