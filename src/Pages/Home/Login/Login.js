import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const Login = () => {

    // Sign In With Email And Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
        if(user){
            console.log(user);
        }else{
            console.log(error.message);
        }
        
    }
    return (
        <div>
            <Container>
                <div className="row mx-auto mt-5 justify-content-center align-items-center">
                    <div className="col-md-4">
                    <h2>Log-In</h2>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log-In
                    </Button>
                </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;