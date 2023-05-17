import React from "react";

import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from "./Cadastrarexperiencia.module.css";
import Input from "../../../components/forms/Input/Input";
import Select from "../../../components/forms/Select/Select";

import { Experiencia, createOrUpdateExperiencia } from "../../../services/experienciaService";


const Cadastrarexperiencia: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state as Experiencia;
    
    const initialValues: Experiencia = {
        id: 0,
        tipo: "",
        titulo: "",
        instituicao: "",
        status: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        tipo: Yup.string().required('Campo obrigatório'),
        titulo: Yup.string().required('Campo obrigatório'),
        instituicao: Yup.string().required('Campo obrigatório'),
        status: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.number().required('Campo obrigatório').typeError('É necessário um valor numérico'),
        anoFim: Yup.number().typeError('É necessário um valor numérico'),
    });

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateExperiencia(values);
            console.log(values);
            resetForm();
            navigate("/curriculo/experiencia/lista");
            alert('Formulário enviado com sucesso!');  
        } catch (error) {
            console.log(error);
            alert('Erro ao enviar formulário!');
        }
    };

return (
    <div className={styles.formWrapper}>
        <Formik initialValues={experiencia || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <h2 className={styles.title}> Cadastrar Experiências </h2>
                    <Select
                        label="Tipo"
                        name="tipo"
                        options={[
                            { value: "academico", label: "Acadêmico" },
                            { value: "profissional", label: "Profissional" },
                        ]}
                    />
                    <Input
                        label="Título"
                        name="titulo"
                        errors={errors.titulo}
                        touched={touched.titulo}
                    />
                    <Input
                        label="Instituição"
                        name="instituicao"
                        errors={errors.instituicao}
                        touched={touched.instituicao}
                    />
                    <Select
                        label="Status"
                        name="status"
                        options={[
                            { value: "cursando", label: "Cursando / Emprego Atual" },
                            { value: "concluido", label: "Concluido / Ex-Emprego" },
                        ]}
                    />
                    <Input
                        label="Ano de Início"
                        name="anoInicio"
                        errors={errors.anoInicio}
                        touched={touched.anoInicio}
                    />
                    <Input
                        label="Ano de Fim"
                        name="anoFim"
                        errors={errors.anoFim}
                        touched={touched.anoFim}
                    />

                    <button className={styles.button} type="submit"> Salvar </button>

                </Form>

            )}
        </Formik>
    </div>
);
};


export default Cadastrarexperiencia;