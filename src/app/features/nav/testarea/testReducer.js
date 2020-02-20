import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../../common/util/reducerUtils";
import { decrementCounter } from "./testActions";

const initalState = {
  data: 42
};

const incrementCounter = (state) => {
    return { ...state, data: state.data + 1 };
}

const dencrementCounter = (state) => {
    return { ...state, data: state.data - 1 };
}



export default createReducer(initalState, {
    [INCREMENT_COUNTER] : incrementCounter, 
    [DECREMENT_COUNTER] : decrementCounter

});


// const testReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data  - 1 };
//     default: 
//         return state;
//   }
 
// };