import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import './index.css';
import PostsList from './containers/posts_list';
import CreatePost from './containers/new_post';
import PostShow from './containers/show_post';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<BrowserRouter>
<Switch>
    <Route path="/create-post" component={CreatePost}/>
    <Route path="/posts/:id" component={PostShow} />
    <Route path="/" component={PostsList}/>
</Switch>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
