import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({title, body, functionForModalWindow, titleButton, show, handleClose, fullscreen, showFooter}) {


    return (
        <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={handleClose}
        >
            <form onSubmit={functionForModalWindow}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            title
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        body
                    }
                </Modal.Body>
                {
                    showFooter &&
                    <Modal.Footer>
                        <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        {
                            titleButton !== "" &&
                            <button type="submit" className="btn btn-success">
                                {
                                    titleButton
                                }
                            </button>
                        }
                    </Modal.Footer>
                }
            </form>
        </Modal>
    );
}

export default ModalWindow;