import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../../services/api";
import { Row, Button } from "reactstrap";
import Title from "../../../components/Title";
import { Link, useHistory } from "react-router-dom";
import MUIDataTable from "mui-datatables";

const Content = styled.div`
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 10px;
`

export default function Search() {

    const history = useHistory();

    const [client, setClient] = useState([]);

    const getClients = async () => {
        try {
            const data = await api.get("/client")
            setClient(data.data);
        } catch (e) { console.log(e) }
    };

    useEffect(() => {
        getClients();
    }, [])

    // const columns = ["ID", "Nome", "CPF", "Email", "Telefone", "Ações"];
    const columns = [
        { name: "id", label: "ID", options: { filter: true, sort: true } },
        { name: "name", label: "Nome", options: { filter: true, sort: false } },
        { name: "cpf", label: "CPF", options: { filter: true, sort: false } },
        { name: "email", label: "Email", options: { filter: true, sort: false } },
        { name: "tel", label: "Telefone", options: { filter: true, sort: false } },
    ];

    const options = {
        filterType: "dropdown",
        filter: true,
        download: false,
        print: false,
        selectableRows: "single",
        responsive: "simple",
        selectableRowsHideCheckboxes: true,
        selectableRowsOnClick: true,
        onRowSelectionChange: (rowSelected) => {
            const id = rowSelected.map(d => client[d.dataIndex].id);
            const name = rowSelected.map(d => client[d.dataIndex].name);
            const cpf = rowSelected.map(d => client[d.dataIndex].cpf);
            const email = rowSelected.map(d => client[d.dataIndex].email);
            const tel = rowSelected.map(d => client[d.dataIndex].tel);
            history.push({ pathname: `/edit/${id}`, state: {id, name, cpf, email, tel}})
        }
    }

    return (
        <CardContainer >
            <Content >
                <Row >
                    <TitleContainer>
                        <Title text="Clientes" />
                        <Link to="/create" style={{ textDecoration: "none" }}>
                            <Button type="submit" color="success">Adicionar</Button>
                        </Link>
                    </TitleContainer>

                    <MUIDataTable
                        title="Selecione um cliente para edita-lo."
                        data={client}
                        columns={columns}
                        options={options}
                    />
                </Row>
            </Content>
        </CardContainer>
    )
}