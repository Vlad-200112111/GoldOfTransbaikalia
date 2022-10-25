import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({title, body, functionForModalWindow, titleButton, show, handleClose}) {


    return (
        <Modal show={show} onHide={handleClose}>
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
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    {
                        titleButton !== "" &&
                        <button type="submit" className="btn btn-success">
                            {
                                titleButton
                            }
                        </button>
                    }
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default ModalWindow;