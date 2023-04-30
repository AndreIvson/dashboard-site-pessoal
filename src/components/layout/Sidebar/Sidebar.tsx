import React from "react";

import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>

                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" >
                            Cadastrar informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" >
                            Cadastrar experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/listagem" >
                            Listagem de experiências
                        </NavLink>
                    </li>
                </ul>

                <h3> Portifólio </h3>
                <ul>
                    <li>
                        <NavLink to="/portifolio/cadastro" >
                            Cadastrar portifólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portifolio/listagem" >
                            Listagem de portifólios
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;