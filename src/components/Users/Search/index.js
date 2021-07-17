import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from '../../../services/api';
import { Row, Col, Table, Button } from 'reactstrap';

const Content = styled.div`
    border: 1px solid #C5C5C5;
    background-color: #FFF;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default function Search() {

    const [client, setClient] = useState([]);

    const getClients = async () => {
        try {
            const data = await api.get('/client')
        console.log(data.data);
        setClient(data.data);
        } catch (e) { console.log(e) }
    };

    useEffect(() => {
        getClients();
    }, [])

    const deleteClient = async (obj) => {
        try {
            const data = await api.delete('/client/' + (obj))
            setClient(data)
        } catch (e) { console.log(e) }
    };

    return (
        <CardContainer >
            <Content >
                <Row >
                    <Col md="12" >
                        <h2>Listagem de clientes</h2>
                    </Col>

                    <Table className="mt-3">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {client.map(obj => {
                                return (
                                    <tr>
                                        <th scope="row">{obj.id}</th>
                                        <td>{obj.name}</td>
                                        <td>{obj.cpf}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.tel}</td>
                                        <td>
                                            <Button color="danger" onClick={() => deleteClient(obj.id)}>Excluir</Button> 
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>

                    <Col md="12">
                        <Button color="success">Adicionar</Button>
                    </Col>
                </Row>
            </Content>
        </CardContainer>
    )
}