import {reducer} from "./reducer.js"

import {combineReducers,legacy_createStore} from "redux"

const rootReducer=combineReducers({reducer})

const store=legacy_createStore(rootReducer)

export {store}
