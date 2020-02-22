import { combineReducers } from "redux";
import testReducer from "../features/nav/testarea/testReducer";
import eventReducer from "../event/eventReducer";
import {reducer as FormReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,

})

export default rootReducer;