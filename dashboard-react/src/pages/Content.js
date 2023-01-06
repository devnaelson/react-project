import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Main from './Main';
import MainTicketCreate from './inc/MainTicketCreate';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
    {
        path: "/Home",
        element: <Main />,
        errorElement: <ErrorPage />,
    },
    {
        path: "",
        element: <Main />,
        errorElement: <ErrorPage />,
    }, {
        path: "create-ticket/:contactId",
        element: <MainTicketCreate />,
        errorElement: <ErrorPage />,
    },
]);

export default function Content() {
    return (
        <Container fluid>
            <Row>
                <SideBar />
                <Col xs={10} md={10} id='content-ajustment' className="">
                    <RouterProvider router={router} />
                </Col>
            </Row>
        </Container>
    );
}