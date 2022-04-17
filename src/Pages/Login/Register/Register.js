import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [agree, setAgree] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)


    }
    if (user) {
        navigate('/login')
    }
    /*
    another to access form value is 
        form onSubmit{eventHandler}
        eventHandler = event =>{
            fieldName = event.target.fieldName.value
        } 
    */
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group onClick={() => setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? '' : 'text-danger'} type="checkbox" label="Accept Genius Car Terms and Condition" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>Already Have An Account? <Link to='/login' className='text-primary text-decoration-none '>Please LogIn.</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;