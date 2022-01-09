import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Datatable from '../../components/Datatable'
import Header from '../../components/Header'
import api from '../../services/api'
import Update from './Modal/Update'

function User() {
    const [response, setResponse] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    function OpenModal(row) {
        setShowModal(!showModal)
        setData(row)
    }
    function toggleModal() {
        console.log('close')
        setShowModal(!showModal)
    }

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id,
            sortable: true,
        },
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
        {
            name: 'email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'action',
            selector: (row) => row.id,
            button: true,
            cell: (row) => (
                <Button onClick={() => OpenModal(row)} size="sm">
                    Edit
                </Button>
            ),
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
                setLoading(false)
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

            {showModal && (
                <Update
                    show={showModal}
                    toggleModal={() => toggleModal()}
                    data={data}
                />
            )}
        </React.Fragment>
    )
}
export default User
