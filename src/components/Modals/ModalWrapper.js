import React from 'react';
import Modal from "react-bootstrap/Modal";

export default function ModalWrapper(props) {
    const {
        modalClassName,
        title,
        show,
        onHide,
        component: ModalComponent
    } = props;

    return (
        <Modal show={show} onHide={onHide} className={modalClassName}>
            <div className="modal-container">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <div className="close-btn" onClick={onHide}>&#10005;</div>
                </Modal.Header>
                <Modal.Body>
                    {ModalComponent && <ModalComponent {...props} />}
                </Modal.Body>
            </div>
        </Modal>
    );
}
