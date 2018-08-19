import { combineReducers } from 'redux'
import { Reducer } from 'redux'

export default function(reducers: Array<{ [key: string]: Reducer }>): Reducer {
  return combineReducers(Object.assign({}, ...reducers))
}
