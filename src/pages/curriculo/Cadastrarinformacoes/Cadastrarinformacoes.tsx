import React, { useEffect, useState } from "react";

import * as Yup from 'yup';

import { Formik, Form } from 'formik';

import styles from "./Cadastrarinformacoes.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/Textarea/Textarea";
import { Informacoes, createInformacoes, getInformacoes } from "../../../services/informacoesService";
import InformacoesCard from "./InformacoesCard/InformacoesCard";

const Cadastrarinformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);

    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),
    });

    const fetchInformacao = async () => {
        try {
            const informacao = await getInformacoes();
            setInformacoes(informacao);
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {
            await createInformacoes(values);
            setInformacoes(values);
            console.log(values);
            resetForm();
            alert('Formulário enviado com sucesso!');

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao  enviar o formulário. Tente novamente.');
        }

    };

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>

                        <h2 className={styles.title}> Cadastrar Informações </h2>

                        <Input
                            label="Foto"
                            name="foto"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />


                        <Textarea
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}

                        />

                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                )}
            </Formik>

            <InformacoesCard informacoes={informacoes} />

        </div>
    );

};

export default Cadastrarinformacoes;