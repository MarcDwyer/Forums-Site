import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import Posts from '../reducers/reducer_getposts';


const rootReducer = combineReducers({
    posts: Posts,
    form: formReducer,
})

export default rootReducer;