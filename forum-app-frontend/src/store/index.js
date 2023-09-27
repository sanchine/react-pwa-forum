import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {userReducer} from './reducers/userReducer';
import {postsReducer} from './reducers/postsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))