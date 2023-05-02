import React from "react";

import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from "./Cadastrarexperiencia.module.css";
import Input from "../../../components/forms/Input/Input";

interface FormValues {
    titulo: string;
    instituicao: string;
    status: string;
    anoInicio: string;
    anoFim: string;
}

const Cadastrarexperiencia: React.FC = () => {

    const initialValues: FormValues = {
        titulo: "",
        instituicao: "",
        status: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        instituicao: Yup.string().required('Campo obrigatório'),
        status: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.number().required('Campo obrigatório').typeError('É necessário um valor numérico'),
        anoFim: Yup.number().required('Campo obrigatório').typeError('É necessário um valor numérico'),
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
                        <h2 className={styles.title}> Cadastrar Experiência </h2>

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
                        <Input
                            label="Status"
                            name="status"
                            errors={errors.status}
                            touched={touched.status}
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