import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer'
import devicesReducer from './devicesReducer'
import glassReducer from './glassReducer'
import juiceReducer from './juiceReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  devices: devicesReducer,
  glass: glassReducer,
  juice: juiceReducer,
  firestore: firestoreReducer
})

export default rootReducer;