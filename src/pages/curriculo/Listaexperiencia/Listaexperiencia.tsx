import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Listaexperiencia.module.css";

import { Experiencia, deleteExperiencia, getExperiencias } from "../../../services/experienciaService";

const Listaexperiencia: React.FC = () => {
    const navigate = useNavigate();

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencias = await getExperiencias();
            setExperiencias(experiencias);
        } catch (error) {
            console.log('Erro ao buscar experiêcias', error);
        }
    };
    useEffect(() => {
        fetchExperiencias();
    }, []);

      const handleEdit = (experiencia: Experiencia) => {
        navigate("/curriculo/experiencia/cadastro", { state: experiencia});
    }
    
    const handleDelete = async (id: number) => {
        try {
            await deleteExperiencia(id);
            fetchExperiencias();
            alert('Experiência excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar experiência', error);
            alert('Erro ao deletar experiência');
        }
    };

  
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
                        <td>{experiencia.instituicao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(experiencia.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Listaexperiencia;