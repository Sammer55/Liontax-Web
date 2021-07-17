import React from "react";
import styled from "styled-components";
import { Form, Row, Col, Input, FormGroup, Label, Button } from "reactstrap";

const Content = styled.div`
    border: 1px solid #C5C5C5;
    background-color: #FFF;
    width: 45%;
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

export default function content() {

    return (
        <CardContainer >
            <Content >
                <Row >
                    <Col md="12" >
                        <h1>Cadastro de Usuários</h1>
                    </Col>

                    <Col md="12" className="mt-1">
                        <small class="text-muted">Informe os dados abaixo para criar um novo usuário.</small>
                    </Col>

                    <Form>
                        <Row>
                            <Col md="6" className="mt-4">
                                <FormGroup>
                                    <Label for="name">Nome</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Ex: Fulano de Tal" />
                                </FormGroup>
                            </Col>

                            <Col md="6" className="mt-4">
                                <FormGroup>
                                    <Label for="cpf">CPF</Label>
                                    <Input required type="text" name="cpf" id="cpf" placeholder="Ex: 000.000.000-00" />
                                </FormGroup>
                            </Col>

                            <Col md="6" className="mt-4">
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input required type="email" name="email" id="email" placeholder="Ex: fulanodetal@gmail.com" />
                                </FormGroup>
                            </Col>

                            <Col md="6" className="mt-4">
                                <FormGroup>
                                    <Label for="tel">Telefone</Label>
                                    <Input required type="text" name="tel" id="tel" placeholder="Ex: (00) 0000-0000" />
                                </FormGroup>
                            </Col>

                            <Col md="12" className="mt-4">
                                <ButtonContainer>
                                    <Button color="dark">Cadastrar</Button>
                                </ButtonContainer>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Content>
        </CardContainer>
    )
}