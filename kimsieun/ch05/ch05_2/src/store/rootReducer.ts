import {combineReducers} from 'redux'
import * as Clock from './Clock'
import * as Counter from './Counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
  remoteUser: R.reducer,
  cards: Cards.reducer
})
