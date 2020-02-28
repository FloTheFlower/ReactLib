import { combineReducers } from "redux";
import testReducer from "../features/nav/testarea/testReducer";
import eventReducer from "../event/eventReducer";
import {reducer as FormReducer} from 'redux-form'
import modalReducer from "../features/modals/modalReducer";
import authReducer from "../features/auth/authReducer";
import asyncReducer from "../features/async/asyncReducer";
import {reducer as ToastrReducer} from 'react-redux-toastr'
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer, 
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer

})

export default rootReducer;