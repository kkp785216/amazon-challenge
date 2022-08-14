import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SignUp = () => {
    useEffect(() => {
        document.getElementById('signup-name')?.focus();
    }, []);
    return (<>
        <Head>
            <title>Amazon Challenge - Login</title>
            <meta name="description" content="Amazon Shoping App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='signup'>
            <div className="signup__container">
                <img src="/assets/logo_alt.png" className='signup__logo' width='103' alt="" />
                <form className="signup__card">
                    <h1 className='signup__heading'>Create Account</h1>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-name">Your Name</label>
                        <input type="text" id="signup-name" name="signup_name" placeholder='Fist and last name' />
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-mobile">Mobile number</label>
                        <div className='signup__mobile__inputWrapper'>
                            <select name="signup_country" id="signup-country">
                                <option value="+91" selected>India +91</option>
                            </select>
                            <input type="mobile" id="signup-mobile" name="signup_mobile" placeholder='Mobile number' />
                        </div>
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-email">Email (optional)</label>
                        <input type="email" id="signup-email" name='signup_email' />
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" id="signup-password" name='signup_password' />
                        <span className='signup__info'><InfoIcon className='signup__infoIcon' />Passwords must be at least 6 characters.</span>
                    </div>
                    <button type="submit" className='signup__button'>Continue</button>
                    <div className="signup__already">
                        <div className="login__footer__border"></div>
                        <span className='signup__already__links' style={{ marginTop: '21px' }}>Already have an account? <Link href='/login'><a>Sign in<ArrowRightIcon style={{ marginTop: '3px' }} fontSize='14' /></a></Link></span>
                        <span className='signup__already__links'>Buying for work? <Link href='/login'><a>Create a free business account<ArrowRightIcon style={{ marginTop: '3px' }} fontSize='14' /></a></Link></span>
                    </div>
                </form>
            </div>
            <div className="login__footer">
                <div className="login__footer__border"></div>
                <div className="login__footer__links">
                    <span className='login__hyperlink'>Conditions of Use</span>
                    <span className='login__hyperlink'>Privacy Notice</span>
                    <span className='login__hyperlink'>Help</span>
                </div>
                <span className="login__footer__copyright">&copy; {new Date().getFullYear()}, Amazon.com Created by Krishna Prajapati</span>
            </div>
        </div>
    </>)
}

export default SignUp