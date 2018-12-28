import { Model } from '@models'
import Link from '@routers/components/Link'
import Button from '@views/atoms/Button'
import { ModelValues, useAction, useStore } from 'easy-peasy'
import React from 'react'

const AsyncCounter = () => {
  const state = useStore((s: ModelValues<Model>) => s.counter)
  const actions = useAction<Model>(d => d.counter)

  return (
    <>
      <h1>Async Counter</h1>
      <p>{state.count}</p>
      <div>
        <Button onPress={actions.asyncIncrement} label="ASYNC INCREMENT" />
      </div>
      <p>
        <Link href="/">To Sync page</Link>
      </p>
    </>
  )
}

export default AsyncCounter
