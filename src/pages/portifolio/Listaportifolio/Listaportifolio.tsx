import React, { useState } from "react";

import styles from "./ListaPortifolio.module.css";

interface Portifolio {
    link: string;
    image: string;
    title: string;
}

const ListaPortifolio: React.FC = () => {

    const [portifolio, setPortifolio] = useState<Portifolio[]>([
        {
            link: "https://andreivson.github.io/ladding-page-ana-luiza/",
            image: "https://blog.goakira.com.br/wp-content/uploads/2022/07/iStock-1320910738-1024x683.jpg",
            title: "Ana Luiza Arquitetura"
        }
    ]);

    const handleEdit = (index: number) => {
        // lógica para lidar com a edição do item de índice index
    }

    const handleDelete = (index: number) => {
        // lógica para lidar com a exclusão do item de índice index
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portifolio.map((itemPortifolio, index) => (
                    <tr key={index}>
                        <td>{itemPortifolio.title}</td>
                        <td><img src={itemPortifolio.image} alt={itemPortifolio.title} className={styles.image} /></td>
                        <td><a href={itemPortifolio.link} target="_blank" rel="noreferrer">{itemPortifolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaPortifolio;