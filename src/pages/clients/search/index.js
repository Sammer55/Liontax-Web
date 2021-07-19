import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../../services/api";
import { Row, Col, Table, Button } from "reactstrap";
import Title from "../../../components/Title";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import swal from 'sweetalert'

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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default function Search() {

    const [client, setClient] = useState([]);

    const getClients = async () => {
        try {
            const data = await api.get("/client")
            console.log(data.data);
            setClient(data.data);
        } catch (e) { console.log(e) }
    };

    useEffect(() => {
        getClients();
    }, [])

    const deleteClient = async (obj) => {
        try {
            await api.delete("/client/" + (obj))
                .then(() => {
                    getClients();
                    swal({
                        title: "title",
                        text: "text",
                        icon: "warning",
                        dangerMode: true,
                    })
                }
                )

        } catch (error) { console.log(error) }
    };

    return (
        <CardContainer >
            <Content >
                <Row >
                    <Col md="12" >
                        <Title text="Lista de clientes" />
                    </Col>

                    <Table className="mt-3 border border-muted">
                        <thead>
                            <tr>
                                <th style={{ fontSize: 20 }} >ID</th>
                                <th style={{ fontSize: 20 }} >Nome</th>
                                <th style={{ fontSize: 20 }} >CPF</th>
                                <th style={{ fontSize: 20 }} >Email</th>
                                <th style={{ fontSize: 20 }} >Telefone</th>
                                <th style={{ fontSize: 20 }} >Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {client.map(obj => {
                                return (
                                    <tr>
                                        <th style={{ fontSize: 20 }} scope="row">{obj.id}</th>
                                        <td style={{ fontSize: 20 }} >{obj.name}</td>
                                        <td style={{ fontSize: 20 }} >{obj.cpf}</td>
                                        <td style={{ fontSize: 20 }} >{obj.email}</td>
                                        <td style={{ fontSize: 20 }} >{obj.tel}</td>
                                        <td>
                                            <Button color="danger" onClick={() => deleteClient(obj.id)}> <FaTrashAlt /> </Button>
                                            <Link to={{ pathname: "/edit", state: { obj } }} style={{ textDecoration: 'none' }}>
                                                <Button style={{ marginLeft: 10 }} color="primary"> <MdModeEdit /> </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>

                    <Col md="12">
                        <ButtonContainer>
                            <Link to="/create" style={{ textDecoration: 'none' }}>
                                <Button color="success">Adicionar</Button>
                            </Link>
                        </ButtonContainer>
                    </Col>
                </Row>
            </Content>
        </CardContainer>
    )
}