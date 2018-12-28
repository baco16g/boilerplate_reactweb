import { Model } from '@models'
import { Store, StoreProvider } from 'easy-peasy'
import * as React from 'react'

export default function(store: Store<Model>, View: () => JSX.Element) {
  return (
    <StoreProvider store={store}>
      <View />
    </StoreProvider>
  )
}
