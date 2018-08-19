import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'

export default function(store: Store, View: () => JSX.Element) {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  )
}
