import {GET_POSTS, POST_POST, GET_POST, POST_COMMENT} from '../actions/index';
import update from 'immutability-helper';
import _ from 'lodash';
import uuid from 'uuid';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
        return _.mapKeys(action.payload.data, '_id');
    }
    switch(action.type) {
        case POST_POST:
        action.payload.key = uuid();
        return [action.payload, ...state];
    }

    switch(action.type) {
        case GET_POST:
        return {...state, [action.payload.data._id]: action.payload.data };
    }
    switch(action.type) {
        case POST_COMMENT:
        return update(state, {
            [action.payload._id]: {
                comments: {$push: [action.payload.comment]}
            }
        })
    }
    return state
}
