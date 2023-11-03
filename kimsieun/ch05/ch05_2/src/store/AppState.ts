import * as Clock from './Clock'
import * as Counter from './Counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export type AppState = {
  clock: Clock.State
  counter: Counter.State
  remoteUser: R.State
  cards: Cards.State
}
