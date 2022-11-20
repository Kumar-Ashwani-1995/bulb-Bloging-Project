import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer, userReducer } from './reducer/post.reducer';

const rootReducer = combineReducers({
    posts:postReducer,
    user:userReducer,
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))
export default store

