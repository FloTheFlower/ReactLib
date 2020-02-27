import { createReducer } from "../../common/util/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";


const initalState =  {
    authenticated: false, 
    currentUser: null
}

const loginUser = (state, payload) => {

    return {
        authenticated: true, 
        currentUser: payload.creds.emails
    }
}

const signOutUser = () => {
    return {
        currentUser: null, 
        authenticated: false

    }
}

export default createReducer(initalState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})