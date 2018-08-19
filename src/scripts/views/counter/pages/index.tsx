import * as React from 'react'
import { ComponentEnhancer, compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { $Call } from 'utility-types'
import { IRootState as ICounterState } from '@redux/counter/reducer'
import * as counterActions from '@redux/counter/actions'

import Button from '@views/counter/atoms/Button'

const Counter = ({ count, onIncrement, onAsyncIncrement }: IProps) => {
  return (
    <div>
      <div>{count}</div>
      <div>
        <Button onPress={onIncrement} label="INCREMENT" />
      </div>
      <div>
        <Button onPress={onAsyncIncrement} label="ASYNC INCREMENT" />
      </div>
    </div>
  )
}

const mapStateToProps = (state: ICounterState) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(counterActions, dispatch)
  }
})

const enhancer: ComponentEnhancer<IProps, {}> = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onIncrement: ({ actions }: IConnectedProps) => () => {
      actions.increment()
    },
    onAsyncIncrement: ({ actions }: IConnectedProps) => () => {
      actions.asyncIncrement(null)
    }
  })
)

interface IConnectedProps
  extends $Call<typeof mapDispatchToProps>,
    $Call<typeof mapStateToProps> {}

interface IHandlers {
  onIncrement: () => void
  onAsyncIncrement: () => void
}

interface IProps extends IConnectedProps, IHandlers {}

export default enhancer(Counter)
