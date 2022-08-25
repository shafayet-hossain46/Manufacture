import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
const Register = () => {

    // Updating User Name
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const navigate = useNavigate()

    
    // Google Sing In
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const googleSignIn = () => {
        signInWithGoogle();
    };

    // Creating User
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
        await updateProfile({displayName: e.target.name.value})
        navigate('/home')
        console.log(user);
    }
    return (
        <div>
            <Container>
                <div className="row mx-auto mt-5 justify-content-center align-items-center">
                    <div className="col-md-4">
                    <h2>Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <Button onClick={googleSignIn} variant="primary" className="mt-3">
                        Google
                    </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;