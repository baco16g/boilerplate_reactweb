import { Model } from '@models'
import Link from '@routers/components/Link'
import Button from '@views/atoms/Button'
import { ModelValues, useAction, useStore } from 'easy-peasy'
import React from 'react'

const Counter = () => {
  const state = useStore((s: ModelValues<Model>) => s.counter)
  const actions = useAction<Model>(d => d.counter)

  return (
    <>
      <h1>Sync Counter</h1>
      <p>{state.count}</p>
      <div>
        <Button onPress={actions.increment} label="INCREMENT" />
      </div>
      <p>
        <Link href="/async">To Async page</Link>
      </p>
    </>
  )
}

export default Counter
