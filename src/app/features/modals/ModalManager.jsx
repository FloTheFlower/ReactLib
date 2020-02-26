import React from 'react'
import {connect} from 'react-redux'
import TestModal from './TestModal'

const mapState = (state) => ({
    currentModal: state.modals
})

const modalLookUp = {
    TestModal
}

 const ModalManager = ({currentModal}) => {
    let renderedModal;

    if (currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookUp[modalType];

        renderedModal = <ModalComponent {...modalProps} />

    return (
        <span>
            {renderedModal}
        </span>
    )
}
 }

export default connect(mapState)(ModalManager);