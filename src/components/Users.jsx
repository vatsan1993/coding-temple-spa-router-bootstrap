// src/components/Users.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                })
        }, []
    )

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" variant="primary" />
                <p>Loading users...</p>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="mt-5 text-center">
                <p>Error loading users: {error.message}</p>
            </Container>
        )
    }
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Users</h1>
            <Row>
                {users.map(user => (
                    <Col key={user.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={`https://i.pravatar.cc/150?u=${user.id}`} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    <strong>Email:</strong> {user.email}<br />
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Website:</strong> {user.website}
                                </Card.Text>
                                <Button variant="primary" href={`/users/${user.id}/todos`}>
                                    View Profile
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
