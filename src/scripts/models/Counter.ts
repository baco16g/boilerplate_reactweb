import { Model } from '@models'
import sleep from '@utils/sleep'
import { Action, effect, Effect } from 'easy-peasy'

const Counter: SubModel = {
  count: 0,
  increment: state => ({
    ...state,
    count: state.count + 1,
  }),
  asyncIncrement: effect(async dispatch => {
    await sleep(1000)
    dispatch.counter.increment()
  }),
}

interface StateValues {
  count: number
}

interface Actions {
  increment: Manipulator
  asyncIncrement: AsyncManipulator
}

type Manipulator<Payload = undefined> = Action<StateValues, Payload>
type AsyncManipulator<Payload = undefined, Result = any> = Effect<Model, Payload, Result>

export interface SubModel extends StateValues, Actions {}
export default Counter
