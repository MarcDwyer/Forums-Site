import {GET_POSTS, POST_POST, GET_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
        return _.mapKeys(action.payload.data, '_id');
    }
    switch(action.type) {
        case POST_POST:
        const random = Math.floor(Math.random() * 1000)
        action.payload.key = random;
        return [action.payload, ...state];
    }

    switch(action.type) {
        case GET_POST:
        return {...state, [action.payload.data._id]: action.payload.data };
    }
    return state
}
