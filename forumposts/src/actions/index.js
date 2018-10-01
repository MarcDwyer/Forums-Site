import axios from 'axios';
import qs from 'qs'
import { userInfo } from 'os';
export const GET_POST = 'getpost';
export const GET_POSTS = 'getposts';
export const POST_POST = 'posterofposts';
export const POST_COMMENT = 'postcoment';
export const USER = 'getuser';

export function getPosts() {
    const request = axios.get('/api/data');
    return {
        type: GET_POSTS,
        payload: request
    }
}

export function createPost(post, callback) {
    const newPost = {
        title: post.title,
        body: post.body,
        date: new Date()
    }

     axios.post('/api/create', qs.stringify(newPost))
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

export function postComment(id, comment) {
    const obj = {
        _id: id,
        comment: comment
    }
    const str = qs.stringify(obj);
     axios.put('/api/add', str)    
    return {
        type: POST_COMMENT,
        payload: obj
    }
}

export function getUser() {
   const req = axios.get('/login');
   return {
       type: USER,
       payload: req

   }
}