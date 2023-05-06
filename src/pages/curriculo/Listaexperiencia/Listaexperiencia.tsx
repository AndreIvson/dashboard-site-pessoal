import React from "react";

import styles from "./Listaexperiencia.module.css";

interface Experiencia {
    titulo: string;
    empresa: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const Listaexperiencia: React.FC = () => {
    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
        {
            titulo: "Frentista",
            empresa: "Auto posto Vianinho",
            tipo: "profissional",
            anoInicio: "2021",
            anoFim: "2023",
        }
    ]);

    const handleDelete = (index: number) => {
        // logica de excluir
    }

    const handleEdit = (experiecia: Experiencia) => {
        // logica de editar
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Ano Início</th>
                    <th>Ano Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.empresa}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Listaexperiencia;