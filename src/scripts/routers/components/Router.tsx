import { History } from 'history'
import React from 'react'
import { Routes } from 'universal-router'

import { Provider as HistoryProvider } from '../contexts/HistoryContext'
import useRouter from '../hooks/useRouter'

interface Props {
  routes: Routes<any, { default: React.ComponentType }>
  history: History
  fallback: NonNullable<React.ReactNode> | null
}

function Router(props: Props) {
  const Component = useRouter(props.routes, props.history)
  return (
    <HistoryProvider value={props.history}>
      <React.Suspense fallback={props.fallback}>
        <Component />
      </React.Suspense>
    </HistoryProvider>
  )
}

export default Router
export { Props }
