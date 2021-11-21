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
        },
        {
            name: 'type',
            selector: (row) => row.type,
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
                            <p> Loading </p>
                        ) : (
                            <Datatable
                                columns={columns}
                                data={response}
                                message={message}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default User
