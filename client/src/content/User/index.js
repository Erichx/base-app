import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Datatable from '../../components/Datatable'
import Header from '../../components/Header'
import api from '../../services/api'

function User() {
    const [response, setResponse] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setloading] = useState(true)

    const columns = [
        {
            name: 'name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'type',
            selector: (row) => row.type,
            sortable: true,
        },
    ]

    useEffect(() => {
        api.get('/users/')
            .then((res) => {
                setResponse(res.data)
            })
            .catch(() => {
                setMessage('Algo deu errado. :(')
            })
            .finally(() => {
                setloading(false)
            })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col>
                        {loading ? (
                            <p className=" animate__animated animate__flash animate__infinite">
                                {' '}
                                <i className="bi bi-hourglass-split"></i>{' '}
                                Carregando...{' '}
                            </p>
                        ) : (
                            <Datatable
                                columns={columns}
                                data={response}
                                message={message}
                                pagination 
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default User
