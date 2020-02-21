import { combineReducers } from "redux";
import testReducer from "../features/nav/testarea/testReducer";
import eventReducer from "../event/eventReducer";

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer

})

export default rootReducer;