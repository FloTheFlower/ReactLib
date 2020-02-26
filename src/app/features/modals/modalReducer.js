import { createReducer } from "../../common/util/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

const initalState = null;

const openModal = (state, payload)  => {
    const {modalType, modalProps} = payload;
    return {modalType, modalProps}
}

const closeModal = (state) => {
    return null
}

export default  createReducer(initalState, {
    [MODAL_OPEN]: openModal, 
    [MODAL_CLOSE]: closeModal

})