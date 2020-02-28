import { SIGN_OUT_USER } from "./authConstants";
import { closeModal } from "../modals/modalActions";
import firebase from '../../../app/config/firebase';


export const login = (creds) => {
  return async (dispatch) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
 
    } catch (error) {
      console.log(error);
    }
  };
};


// export const login = creds => {
//   return asnync (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
//       dispatch(closeModal())
//     } catch(error) {
//       console.log(error);
//     }
//   };
// };

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  };
};
