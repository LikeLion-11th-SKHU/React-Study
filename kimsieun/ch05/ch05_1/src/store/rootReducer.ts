import type {Action} from 'redux'
import type {AppState} from './AppState'
export const rootReducer = (state: AppState, action: Action) => state

// const initialAppState = {
//   today: new Date()
// }
// export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
//   switch (action.type) {
//     case 'setToday': {
//       return {...state, today: action.today}
//     }
//   }
//   return state
// }
