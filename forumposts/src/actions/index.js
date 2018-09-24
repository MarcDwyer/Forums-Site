import axios from 'axios';
import qs from 'qs'
export const GET_POST = 'getpost';
export const GET_POSTS = 'getposts';
export const POST_POST = 'posterofposts';
export function getPosts() {
    const request = axios.get('/api/data');
    return {
        type: GET_POSTS,
        payload: request
    }
}

export function createPost(post, callback) {
    console.log(post);
     axios.post('/api/create', qs.stringify(post))
                    .then(callback());

    return {
        type: POST_POST,
        payload: post
    }
}

export function getPost(id) {
    const req = axios.get(`/api/find`, {
        params: {
            _id: id
        }
    });
    return {
        type: GET_POST,
        payload: req
    }
}