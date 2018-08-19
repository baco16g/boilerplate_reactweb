import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '@redux/counter/actions'

export interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}

const reducer = reducerWithInitialState(initialState).case(
  actions.increment,
  state => ({ ...state, count: ++state.count })
)

export interface IRootState {
  counter: IState
}

export default {
  counter: reducer
}
