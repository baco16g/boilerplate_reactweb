import counter, { SubModel as CounterModel } from '@models/Counter'
import { createStore } from 'easy-peasy'

const store = createStore({
  counter,
})

export interface Model {
  counter: CounterModel
}

export default store
