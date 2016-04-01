import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root.reducer';
import createLogger from 'redux-logger'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(createLogger())  
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
