import { createStore, applyMiddleware, Reducer, Store } from 'redux'

export default function configureStore(
  rootReducer: Reducer,
  initialState: object = {},
  middlewares: [any]
): Store {
  const middleware = applyMiddleware(...middlewares)
  return createStore(rootReducer, initialState!, middleware)
}
