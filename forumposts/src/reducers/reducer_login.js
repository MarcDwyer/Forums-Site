import {USER} from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case USER:
        return action.payload.data
    }
    return state;
}