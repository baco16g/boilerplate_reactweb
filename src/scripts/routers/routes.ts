import React from 'react'
import { Routes } from 'universal-router'

const routes: Routes<any, { default: React.ComponentType }> = [
  {
    path: '/',
    action: () => import('@views/pages/Counter'),
  },
  {
    path: '/async',
    action: () => import('@views/pages/AsyncCounter'),
  },
]

export default routes
