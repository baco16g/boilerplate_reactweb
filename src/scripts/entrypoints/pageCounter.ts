import ReduxThunk from 'redux-thunk'

import extendsReducer from '@entrypoints/utils/extendsReducer'
import configureStore from '@entrypoints/utils/configureStore'
import adaptStoreToView from '@entrypoints/utils/adaptStoreToView'
import renderViews from '@entrypoints/utils/renderView'

import counterReducer from '@redux/counter/reducer'
import couterView from '@views/counter/'

const reducer = extendsReducer([counterReducer])
const store = configureStore(reducer, undefined, [ReduxThunk])
const view = adaptStoreToView(store, couterView)

renderViews('data-react-counter-app', view)
