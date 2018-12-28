import renderViews from '@entrypoints/utils/renderView'
import store from '@models'
import Router from '@routers/components/Router'
import history from '@routers/history'
import routes from '@routers/routes'
import { StoreProvider } from 'easy-peasy'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`${reset}`

renderViews(
  'data-react-app',
  <StoreProvider store={store}>
    <GlobalStyle />
    <Router routes={routes} history={history} fallback={<p>Loading...</p>} />
  </StoreProvider>
)
