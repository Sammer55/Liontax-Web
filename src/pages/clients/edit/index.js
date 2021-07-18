import React from "react";
import styled from "styled-components";
import { Row, Col, Input, FormGroup, Label, Button } from "reactstrap";
import { Formik } from "formik";
import api from "../../../services/api";
import swal from 'sweetalert';

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

export default function Edit(props) {

    console.log('props', props.location.state.obj.name)

    return (
        <CardContainer >
            <Content >
                <Row >
                    <Col md="12" xs="12" >
                        <h2>Editar cliente</h2>
                    </Col>

                    <Col md="12" className="mt-1">
                        <small class="text-muted">Altere os dados do cliente <strong> {props.location.state.obj.name} </strong> editando os campos abaixo.</small>
                    </Col>

                    <Formik
                        initialValues={{ name: props.location.state.obj.name, cpf: props.location.state.obj.cpf, email: props.location.state.obj.email, tel: props.location.state.obj.tel }}
                        onSubmit={async (values) => {
                            const response = await api.put("/client/" + (props.location.state.obj.id), {
                                name: (values.name),
                                cpf: (values.cpf),
                                email: (values.email),
                                tel: (values.tel),
                            })
                                .then(
                                    swal({
                                        title: "Alterar dados de cliente",
                                        text: `O usuário ${values.name} foi editado com sucesso.`,
                                        icon: "success",
                                    })
                                )
                                .catch((error) => console.log(error))
                        }}>
                        {(props) => (
                            <Row>
                                <Col md="6" className="mt-4">
                                    <FormGroup>
                                        <Label for="name">Nome</Label>
                                        <Input required type="text" name="name" id="name" placeholder="Ex: Fulano de Tal" value={props.values.name} onChange={props.handleChange("name")} />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-4">
                                    <FormGroup>
                                        <Label for="cpf">CPF</Label>
                                        <Input required type="text" name="cpf" id="cpf" placeholder="Ex: 000.000.000-00" value={props.values.cpf} onChange={props.handleChange("cpf")} />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-4">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input required type="email" name="email" id="email" placeholder="Ex: fulanodetal@gmail.com" value={props.values.email} onChange={props.handleChange("email")} />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-4">
                                    <FormGroup>
                                        <Label for="tel">Telefone</Label>
                                        <Input required type="text" name="tel" id="tel" placeholder="Ex: (00) 0000-0000" value={props.values.tel} onChange={props.handleChange("tel")} />
                                    </FormGroup>
                                </Col>

                                <Col md="12" className="mt-4">
                                    <ButtonContainer>
                                        <Button type="submit" color="dark" onClick={props.handleSubmit}>Cadastrar</Button>
                                    </ButtonContainer>
                                </Col>
                            </Row>
                        )}
                    </Formik>
                </Row>
            </Content >
        </CardContainer >
    )
}