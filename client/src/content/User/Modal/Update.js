import PropTypes from 'prop-types'
import React from 'react'
import ModalEdit from '../../../components/ModalEdit'

function Update({ show, toggleModal, data }) {
    return (
        <React.Fragment>
            <ModalEdit show={show} toggleModal={() => toggleModal()}>
                {data.name}
            </ModalEdit>
        </React.Fragment>
    )
}

Update.propTypes = {
    show: PropTypes.any,
    toggleModal: PropTypes.func,
    data: PropTypes.object,
}
export default Update
