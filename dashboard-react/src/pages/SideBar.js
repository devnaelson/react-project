import Col from 'react-bootstrap/Col';
import { useEffect, useState, useRef } from 'react';
import { Link, BrowserRouter } from "react-router-dom";

import {
    FaUserCircle,
    FaHome,
    FaTools,
    FaLock,
    FaTicketAlt, FaAngleDown, FaAngleRight, FaAngleLeft
} from "react-icons/fa";

function Menu() {

    const defaultIcon = <FaAngleLeft style={{ position: "absolute", marginTop: "5px", fontSize: "20px" }} />;
    const getIcon = useRef(defaultIcon);
    const [inputValue, setInputValue] = useState('defaultIcon');

    useEffect(() => {
        if (inputValue) {
            getIcon.current = <FaAngleDown style={{ position: "absolute", marginTop: "5px", fontSize: "20px" }} />;
        }
    });

    return (
        <BrowserRouter>
            <div className='menu-sidebar'>
                <div className='profile-sideBar'>
                    <div><FaUserCircle /></div>
                    <h4>Ola Naelson Gonçalves Saraiva</h4>
                    <p>Seja Bem vindo (a)</p>
                </div>
                <ul className='menu-main'>
                    <li><FaHome />&ensp; <Link reloadDocument to='/home'>Home</Link></li>
                    <li onMouseEnter={() => setInputValue('li2')} onMouseLeave={() => setInputValue('defaultIcon')}><FaTicketAlt />&ensp; GESTÃO DE TICKETS {inputValue === 'li2' ? getIcon.current : defaultIcon}
                        <ul className='subm'>
                            <li><FaAngleRight />Tickets</li>
                        </ul>
                    </li>
                    <li>&ensp; GESTÃO DE AGENDA</li>
                    <li>&ensp; GESTÃO DE TICKETS</li>
                    <li>&ensp; GESTÃO DE COMPRAS</li>
                    <li>&ensp; GESTÃO DE DADOS DE ACESSO</li>
                    <li><FaLock />&ensp; DADOS DE ACESSO</li>
                    <li onMouseEnter={() => setInputValue('li8')} onMouseLeave={() => setInputValue('defaultIcon')}><FaTools />&ensp; GESTÃO DE ADMIN {inputValue === 'li8' ? getIcon.current : defaultIcon}
                        <ul className='subm'>
                            <li><FaAngleRight /><Link reloadDocument to='create-ticket/123'>Create Ticket</Link> </li>
                        </ul>
                    </li>
                    <li>&ensp; SAIR</li>
                </ul>
            </div>

        </BrowserRouter>
    );
}
export default function SideBar() {
    return (
        <Col id='sidebar-ajustment' xs={2} md={2}>
            <Menu />
        </Col >
    );
}