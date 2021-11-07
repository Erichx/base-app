import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Datatable from '../../components/Datatable'
import Header from '../../components/Header'

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

    const data = [   {
        id: 1,
        name: 'Tiago Correia',
        email: 'tiago-correia@armyspy.com',
        nivel: 'admin',
    },
    {
        id: 2,
        name: 'Isabela Cardoso Dias',
        email: 'isabelacardosodias@dayrep.com',
        nivel: 'client',
    },]

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
