import React, { useEffect, useState } from 'react';
import {Container, Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import useData from '../../../src/Hooks/useData'

const HomeTools = () => {

    // This data is getting form hook
    const {tools} = useData()
    return (
        <div>
            <Container>
                <div className="row align-items-center">
                    {tools.map(tool => <Card className="col-md-4 mb-4  shadow-3">
                    <Card.Img variant="top" src={tool.image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <p>{tool.availableQuantity}</p>
                        </Card.Text>
                        <Button as={Link} to={`/purchase/${tool._id}`} variant="primary">Place Order</Button>
                    </Card.Body>
                    </Card>)}
                </div>
            </Container>
        </div>
    );
};

export default HomeTools;