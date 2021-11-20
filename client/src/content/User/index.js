import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Datatable from '../../components/Datatable'
import Header from '../../components/Header'
import api from '../../services/api'

function User() {
    const columns = [
        {
            name: 'name',
            selector: (row) => row.name,
        },
        {
            name: 'email',
            selector: (row) => row.email,
        },
        {
            name: 'nivel',
            selector: (row) => row.nivel,
        },
    ]



    const data =  api.get('/users/')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });

    return (
        <React.Fragment>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col >
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
