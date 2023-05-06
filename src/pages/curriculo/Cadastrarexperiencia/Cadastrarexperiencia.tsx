import React from "react";

import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from "./Cadastrarexperiencia.module.css";
import Input from "../../../components/forms/Input/Input";

import Select from "../../../components/forms/Select/Select";

interface FormValues {
    tipo: string;
    titulo: string;
    instituicao: string;
    status: string;
    anoInicio: string;
    anoFim: string;
}

const Cadastrarexperiencia: React.FC = () => {

    const initialValues: FormValues = {
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

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Lógica de envio para backend
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
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

                        <button className={styles.button} type="submit"> Cadastrar </button>

                    </Form>

                )}
            </Formik>
        </div>
    );
};


export default Cadastrarexperiencia;