import PropTypes from 'prop-types'
import React from 'react'
import { Alert } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

function Datatable({ columns, data, message }) {
    return (
        <React.Fragment>
            {!Array.isArray(data) || !data.length ? (
                <Alert variant="info" >
                    {message}
                </Alert>
            ) : (
                <DataTable 
                    columns={columns}
                    data={data}
                />
            )}
        </React.Fragment>
    )
}

Datatable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    message: PropTypes.string,
}
export default Datatable
