import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Datatable from '../../components/Datatable'
import Header from '../../components/Header'

function User() {
    const columns = [
        {
            name: 'Title',
            selector: (row) => row.title,
        },
        {
            name: 'Year',
            selector: (row) => row.year,
        },
    ]

    const data = []

    return (
        <React.Fragment>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Datatable
                            columns={columns}
                            data={data}
                            message={'Não há usuários registrados'}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default User
