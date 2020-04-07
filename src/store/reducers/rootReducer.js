import { combineReducers } from 'redux'

import authReducer from './authReducer'
import devicesReducer from './devicesReducer'
import glassReducer from './glassReducer'
import juiceReducer from './juiceReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  devices: devicesReducer,
  glass: glassReducer,
  juice: juiceReducer
})

export default rootReducer;