import '../style.css';
import { Logo as LogoCompany } from '../Logo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBars, FaUserAlt, FaPowerOff } from "react-icons/fa";
import { useState } from 'react';

export default function Header() {
    const [click, setClick] = useState(0);
    function sideBarEnable() {

        if (click === 0) {
            document.getElementById('sidebar-ajustment').style.display = "none";
            document.getElementById('content-ajustment').className = 'col-12 md-12 bg-danger';
        }

        if (click === 1) {
            document.getElementById('content-ajustment').className = 'col-10 md-10 bg-danger';
            document.getElementById('sidebar-ajustment').style.display = "inline";
        }

        if (click === 1)
            setClick(0);

        if (click !== 1)
            setClick((click) => click + 1);
    }

    return (
        <Container fluid className="Header">
            <Row>
                <Col xs={2} md={2}><LogoCompany /></Col>
                <Col xs={10} md={10}>
                    <div className='header-btn-trigger-menu'>
                        <ul>
                            <li onClick={sideBarEnable}>  <FaBars /></li>
                            <li>  <FaUserAlt /></li>
                            <li>  <FaPowerOff /></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}