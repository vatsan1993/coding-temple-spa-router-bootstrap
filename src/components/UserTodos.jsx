import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, ListGroup, Spinner } from 'react-bootstrap'

export default function UserTodos() {
    const { userId } = useParams();
    const [userTodos, setUserTodos] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [userId])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => {
                setUserTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [userId])


    if (loading) {
        return (
            <Container>
                <h3>
                    <Spinner
                        animation="border"
                        variant="info"
                        style={{ marginRight: '15px' }}
                        role="status"
                    />
                    Loading User Todos...
                </h3>
            </Container>
        )
    }
    if (error) {
        return (
            <Container className="mt-5 text-center">
                <p>Error loading todos: {error.message}</p>
            </Container>
        )
    }

    return (
        <Container>
            <h4>Todos for: {user.name}</h4>
            <ListGroup className="mt-4" as="ol" numbered>
                {userTodos.map(todo => (
                    <ListGroup.Item key={todo.id} variant={todo.completed ? "info" : "warning"}>
                        {todo.completed ? "✅" : "❌"} - {todo.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>




    )
}
