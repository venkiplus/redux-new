import { combineReducers } from 'redux'
import counter from './counter'
import datarequest from './datarequest'
const rootReducer = combineReducers({
  counter,
  datarequest
})

export default rootReducer
