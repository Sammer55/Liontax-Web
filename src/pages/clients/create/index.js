import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Input, FormGroup, Label, Button } from "reactstrap";
import { Formik } from "formik";
import * as yup from 'yup';
import api from "../../../services/api";
import swal from 'sweetalert';
import { formatTel } from '../../../components/TextFormat/formatTel';
import { formatCpf } from '../../../components/TextFormat/formatCpf';
import InputMask from 'react-input-mask';
import Title from '../../../components/Title';
import Subtitle from '../../../components/Subtitle';
import { Link } from 'react-router-dom';

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
    width: 100%;
    justify-content: center;
    align-items: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const ErrorContainer = styled.div`
    justify-content: flex-start;
    background-color: #DC3545;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    border-radius: 10px;
    align-items: center;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    flex-direction: row;
`

const ErrorText = styled.small`
    color: #FFF;
    font-size: 17px;
`

export default function Create() {

    const initialValues = {
        name: "",
        cpf: "",
        email: "",
        tel: ""
    }

    const ReviewSchema = yup.object({
        name: yup
            .string()
            .required('Insira seu nome para continuar.'),
        cpf: yup
            .string()
            .required('Insira seu CPF.'),
        email: yup
            .string()
            .required('Insira seu e-mail.')
            .email('Insira seu e-mail.'),
        tel: yup
            .string()
            .required('Insira seu telefone.')
    })

    const [cpf, setFormatedCpf] = useState();
    const [tel, setFormatedTel] = useState();

    return (
        <CardContainer >
            <Content >
                <Row>
                    <Col md="12" xs="12" >
                        <TitleContainer>
                                <Title text="Cadastro" />
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button style={{ marginRight: 5 }} type="submit" color="primary">Clientes</Button>
                                </Link>
                        </TitleContainer>
                    </Col>

                    <Col md="12">
                        <Subtitle text="Informe os dados abaixo para criar um novo cliente." />
                    </Col>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={async (values, { resetForm }) => {
                            setFormatedCpf(values.cpf)
                            setFormatedTel(values.tel)

                            const formated_cpf = formatCpf(cpf)
                            const formated_tel = formatTel(tel)

                            await api.post("/client", {
                                name: (values.name),
                                cpf: formated_cpf,
                                email: (values.email),
                                tel: formated_tel,
                            })
                                .then(() => {
                                    resetForm({ values: initialValues })
                                    swal({
                                        title: "Cadastro de cliente",
                                        text: `O usuário ${values.name} foi cadastrado com sucesso`,
                                        icon: "success",
                                    })
                                }

                                )
                                .catch((error) => console.log(error))
                        }}
                        validationSchema={ReviewSchema}>
                        {(props) => (
                            <Row>

                                {
                                    props.errors.name + props.errors.cpf + props.errors.email + props.errors.tel ?
                                        <Col lg="12">
                                            <ErrorContainer>
                                                <ErrorText> {props.errors.name || props.errors.cpf || props.errors.email || props.errors.tel} </ErrorText>
                                            </ErrorContainer>
                                        </Col>
                                        :
                                        null
                                }

                                <Col md="6" className="mt-2">
                                    <FormGroup>
                                        <Label for="name">Nome</Label>
                                        <Input required type="text" name="name" id="name" placeholder="Ex: Fulano de Tal" value={props.values.name} onChange={props.handleChange("name")} />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-2">
                                    <FormGroup>
                                        <Label for="cpf">CPF</Label>
                                        <InputMask mask="999.999.999-99" value={props.values.cpf} onChange={props.handleChange('cpf')}>
                                            {() => <Input required placeholder="000.000.000-00" />}
                                        </InputMask>
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-2">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input required type="email" name="email" id="email" placeholder="Ex: fulanodetal@gmail.com" value={props.values.email} onChange={props.handleChange("email")} />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mt-2">
                                    <FormGroup>
                                        <Label for="tel">Telefone</Label>
                                        <InputMask mask={("(99) 99999-9999" || "(99) 99999-9999")} value={props.values.tel} onChange={props.handleChange('tel')}>
                                            {() => <Input required placeholder="(00) 00000-0000" />}
                                        </InputMask>
                                    </FormGroup>
                                </Col>

                                <Col md="12" className="mt-2">
                                    <ButtonsContainer>
                                        <Button style={{ marginRight: 5 }} type="submit" color="danger" onClick={props.handleReset}>Limpar</Button>
                                        <Button type="submit" color="dark" onClick={props.handleSubmit}>Cadastrar</Button>
                                    </ButtonsContainer>
                                </Col>
                            </Row>
                        )}
                    </Formik>
                </Row>
            </Content >
        </CardContainer >
    )
}