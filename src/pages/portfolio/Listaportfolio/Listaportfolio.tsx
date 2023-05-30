import React, { useEffect, useState } from "react";

import styles from "./Listaportfolio.module.css";
import { Portfolio, deletePortfolio, getPortfolio } from "../../../services/portfolioServices";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import Table from "../../../components/common/table";

const Listaportfolio: React.FC = () => {

    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log("Erro ao buscar portfólio.", error);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    const handleEdit = (portfolio: Portfolio) => {
        navigate("/portfolio/cadastro", { state: portfolio });
    };

    const handleDelete = async (id: number) => {
        try {
            await deletePortfolio(id);
            fetchPortfolio();
            alert("Portfólio deletado com sucesso!");
        } catch (error) {
            console.log("Erro ao deletar o portfólio.", error);
            alert("Erro ao deletar o portfólio");
        }
    };

    return (
        <Table
            data={portfolio}
            columns={['Título', 'Imagem', 'Link', 'Ações']}
            renderRow={(portfolio, index) => (
                <>
                    <td>{portfolio.title}</td>
                    <td><img src={portfolio.image} alt="Imagem do portfolio"></img></td>
                    <td>{portfolio.link}</td>
                    <td>
                        <Button small onClick={() => handleEdit(portfolio)}>Editar</Button>
                        <Button small onClick={() => handleDelete(portfolio.id)}>Excluir</Button>
                    </td>
                </>
            )}></Table>
    );
};

export default Listaportfolio;