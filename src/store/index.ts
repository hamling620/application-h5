import { createStore, applyMiddleware, compose, Middleware } from 'redux'

const middlewares: Middleware[] = []

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(() => {}, enhancers)

export default store
