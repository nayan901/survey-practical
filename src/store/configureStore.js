import rootReducer from './reducers/rootReducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const configureStore = createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;