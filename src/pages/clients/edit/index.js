import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Input, FormGroup, Label, Button } from "reactstrap";
import { Formik } from "formik";
import * as yup from "yup";
import api from "../../../services/api";
import swal from "sweetalert";
import { formatTel } from "../../../components/TextFormat/formatTel";
import { formatCpf } from "../../../components/TextFormat/formatCpf";
import InputMask from "react-input-mask";
import Title from "../../../components/Title";
import Subtitle from "../../../components/Subtitle";
import { Link, useHistory } from "react-router-dom";

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

export default function Edit(props) {

    const id = (props.location.state.id[0])
    const history = useHistory();

    const ReviewSchema = yup.object({
        name: yup
            .string()
            .required("Insira seu nome."),
        cpf: yup
            .string()
            .required("Insira seu CPF.")
            .min(14, "Confirme seu CPF.")
            .max(14, "Confirme seu CPF."),
        email: yup
            .string()
            .required("Insira seu e-mail.")
            .email("Insira seu e-mail."),
        tel: yup
            .string()
            .required("Insira seu telefone.")
            .matches(/\+55 \(\d{2}\)\s\d{4,5}\-\d{4}/, "Confirme seu telefone."),
    })

    const [formatedCpf, setFormatedCpf] = useState();
    const [formatedTel, setFormatedTel] = useState();

    const deleteClient = async () => {
        await api.delete("/client/" + id).then(() => {
            swal({
                title: "Aviso de exclusão!",
                text: `O cliente selecionado foi excluído.`,
                icon: "warning",
                dangerMode: true,
            })
            history.push({ pathname: "/"})
        });
    }

    return (
        <CardContainer >
            <Content >
                <Row>
                    <Col md="12" xs="12" >
                        <TitleContainer>
                            <Title text="Editar" />
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button style={{ marginRight: 5 }} type="submit" color="success">Clientes</Button>
                            </Link>
                        </TitleContainer>
                    </Col>

                    <Col md="12">
                        <Subtitle text={`Edite os dados do cliente alterando os campos abaixo.`} />
                    </Col>

                    <Formik
                        initialValues={{
                            name: props.location.state.name[0],
                            email: props.location.state.email[0],
                            cpf: props.location.state.cpf[0],
                            tel: props.location.state.tel[0]
                        }}
                        onSubmit={async (values) => {

                            setFormatedCpf(values.cpf)
                            setFormatedTel(values.tel)

                            const formated_cpf = formatCpf(formatedCpf)
                            const formated_tel = formatTel(formatedTel)

                            await api.put("/client/" + id, {
                                name: (values.name),
                                cpf: formated_cpf,
                                email: (values.email),
                                tel: formated_tel,
                            })
                                .then(
                                    swal({
                                        title: "Edição de cliente",
                                        text: `O cliente foi editado com sucesso.`,
                                        icon: "success",
                                    })
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
                                        <InputMask mask="999.999.999-99" value={props.values.cpf} onChange={props.handleChange("cpf")}>
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
                                        <InputMask mask={("+55 \\(99) 99999-9999" || "(99) 99999-9999")} value={props.values.tel} onChange={props.handleChange("tel")}>
                                            {() => <Input required placeholder="(00) 00000-0000" />}
                                        </InputMask>
                                    </FormGroup>
                                </Col>

                                <Col md="12" className="mt-2">
                                    <ButtonsContainer>
                                        <Button style={{ marginRight: 5 }} type="submit" color="danger" onClick={deleteClient}>Excluir</Button>
                                        <Button type="submit" color="dark" onClick={props.handleSubmit}>Confirmar edição</Button>
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