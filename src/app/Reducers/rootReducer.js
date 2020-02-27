import { combineReducers } from "redux";
import testReducer from "../features/nav/testarea/testReducer";
import eventReducer from "../event/eventReducer";
import {reducer as FormReducer} from 'redux-form'
import modalReducer from "../features/modals/modalReducer";
import authReducer from "../features/auth/authReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer, 
    auth: authReducer

})

export default rootReducer;