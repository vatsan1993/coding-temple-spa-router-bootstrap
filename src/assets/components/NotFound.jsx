import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import React from 'react'

export default function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(
        () => {
            const interval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000)


            const timeout = setTimeout(() => {
                navigate('/')
            }, 10000)

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            }

        }, [navigate]
    )



    return (
        <Container className="mt-5 text-center">
            <h1>
                <Badge bg="danger">404</Badge> Page Not Found
            </h1>
            <p className="lead">The page you are looking for does not exist.</p>
            <p>
                Redirecting to home page in <Badge bg="warning">{countdown}</Badge> seconds...
            </p>
            <Link to="/" className="btn btn-primary">
                Go to Home Page
            </Link>
        </Container>
    )
}
