import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PopMoviesReducer from './reducers/PopMoviesReducer'

const store = createStore(
  combineReducers({
    moviesState: PopMoviesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
