import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook1.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;


    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
    }

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2 fw-bolder'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                {
                    errorElement
                }
                <div >
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary w-50 d-block mx-auto my-2">
                        <img className='mx-3' style={{ width: '25px' }} src={google} alt="" />
                        Google Sign In
                    </button>
                </div>

                <div >
                    <button className="btn btn-primary w-50 d-block mx-auto my-2">
                        <img className='mx-3' style={{ width: '25px' }} src={facebook} alt="" />
                        Facebook Sign In
                    </button>
                </div>
                <div >
                    <button onClick={() => signInWithGithub()} className="btn btn-primary w-50 d-block mx-auto my-2">
                        <img className='mx-3' style={{ width: '25px' }} src={github} alt="" />
                        Github Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;