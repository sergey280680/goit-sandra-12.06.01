//
import { createClient } from 'pexels';
const API_KEY = '563492ad6f91700001000001481853ffd8dd462bba7de91b84b8ef1d'
const client = createClient(API_KEY)

let query = 'Nature'
let per_page = 10

// console.log(client);

// client.photos.search({ query, per_page }).then(photos => {
//     return photos.photos
// }).then(data => {
//     // console.log(data);
//     return data
// });

async function getFetch() {
    // const photos = await client.photos.search({ query, per_page })
    // console.log(photos);
    // const data = await photos.photos
    // console.log(data);

    try {
    const photos = await client.photos.search({ query, per_page })
    console.log(photos);
    const data = await photos.photos
    console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getFetch()