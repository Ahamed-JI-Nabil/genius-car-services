import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let errorElement;
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    // const handleRegister = ()=>{
    //     navigate('/register')
    // }

    return (
        <div className='container mx-auto w-50 mt-5'>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {
                    errorElement
                }
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>New To Genius Car? <Link to='/register' className='text-primary text-decoration-none' >Please Register.</Link></p>
            <p className='mt-3'>Forget Password? <Link to='/register' className='text-primary text-decoration-none' onClick={resetPassword} >Reset Password.</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;