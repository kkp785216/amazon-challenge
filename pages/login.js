import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginFooter from '../Components/LoginFooter'
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/action'

const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [toggleLogin, setToggleLotin] = useState(true);
    const { loginUser } = useSelector(state => state);

    useEffect(() => {
        document.getElementById('login-email')?.focus();
    }, []);

    useEffect(() => {
        loginUser.logedIn && router.back();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginUser]);

    const handleToggleLogin = (e) => {
        e.preventDefault();
        setToggleLotin(false);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(action({
            type: 'LOGIN',
            email: loginForm.email,
            password: loginForm.password
        }));
    }

    return (<>
        <Head>
            <title>Amazon Challenge - Login</title>
            <meta name="description" content="Amazon Shoping App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='login'>
            <div className="login__container">
                <Link href='/'><a><img src="/assets/logo_alt.png" className='login__logo' width='103' alt="" /></a></Link>
                <form className="login__card">
                    <h1 className='login__heading'>Sign-In</h1>
                    {toggleLogin ? <>
                        <label htmlFor="login-email">Email or mobile phone number</label>
                        <input type="text" id="login-email" value={loginForm.email} onChange={(e) => { setLoginForm({ ...loginForm, email: e.target.value }) }} /></> : <>
                        <label htmlFor="login-password">Password</label>
                        <input type="password" id="login-password" value={loginForm.password} onChange={(e) => { setLoginForm({ ...loginForm, password: e.target.value }) }} /></>}
                    {toggleLogin ?
                        <button type="button" onClick={handleToggleLogin} className='login__button'>Continue</button> :
                        <button type="submit" onClick={handleLoginSubmit} className='login__button'>Sin in</button>}
                    <p className="login__policy">By continuing, you agree to Amazon&apos;s <span className='login__hyperlink'>Conditions of Use</span> and <span className='login__hyperlink'>Privacy Notice.</span></p>
                </form>
                <div className="logon__newUser">
                    <span>New to Amazon?</span>
                </div>
                <Link href="/signup"><a className="login__createAc">Create your Amazon account</a></Link>
            </div>
            <LoginFooter />
        </div>
    </>)
}

export default Login