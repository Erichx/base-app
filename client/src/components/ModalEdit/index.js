import PropTypes from 'prop-types'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalEdit({ show, toggleModal, children }) {
    return (
        <Modal show={show} onHide={toggleModal}>
            {console.log('show', typeof show, show)}
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body> {children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Fechar
                </Button>
                <Button variant="primary">Atualizar</Button>
            </Modal.Footer>
        </Modal>
    )
}

ModalEdit.propTypes = {
    show: PropTypes.bool,
    toggleModal: PropTypes.func,
    children: PropTypes.any,
}

export default ModalEdit
