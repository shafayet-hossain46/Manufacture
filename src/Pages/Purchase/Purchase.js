import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Card, Button, Form} from "react-bootstrap"
import {useParams} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'
const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const {id} = useParams()
    const [tool, setTool] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/purchase/${id}`)
        .then(res => {
            setTool(res?.data)
        })
    },[id])

    // handle submit
    const handleSubmit = e => {
        e.preventDefault()

        let minQuantity = e.target.minQuantity.value;
        if(!(minQuantity >= tool?.minOrderQuantity && minQuantity <= tool?.availableQuantity)){
            alert(`The Quantity Should not be less than ${tool?.minOrderQuantity} and more than ${tool?.availableQuantity}`)
            return;
        }
        const data = {
            tool: tool,
            minQuantity: minQuantity,
            email: user?.email,
            name: user.displayName,
            number: e.target.number.value,
            address: e.target.address.value
        }

        axios.post(`http://localhost:5000/myOrders`, data)
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-6">
                    <Card className="mb-4  shadow-3">
                    <Card.Img variant="top" src={tool.image} />
                    <Card.Body>
                        <Card.Title>{tool?.name}</Card.Title>
                        <Card.Text>
                        {tool?.description}<br />
                        <span>Available Quantity : {tool.availableQuantity}</span><br />
                        <span>Minimum Order Quantity : {tool.minOrderQuantity}</span><br />
                        <span>Price : {tool.price}</span><br />
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-6">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="email" disabled={true} value={user?.displayName} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="name" disabled={true} value={user?.email} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="number" type="number" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="number" name="minQuantity" defaultValue={tool.minOrderQuantity} placeholder="Increase or Decrease The Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <textarea className="form-control" name="address" id="w3review" rows="3" placeholder="Enter Your Address..."/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Make Purchase
                        </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Purchase;