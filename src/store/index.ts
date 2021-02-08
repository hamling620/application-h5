import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  middlewares.push(createLogger())
}

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(reducer, {}, enhancers)

sagaMiddleware.run(rootSaga)

export default store
