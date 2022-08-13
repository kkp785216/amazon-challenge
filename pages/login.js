import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LoginFooter from '../components/LoginFooter'

const Login = () => {
    return (<>
        <Head>
            <title>Amazon Challenge - Login</title>
            <meta name="description" content="Amazon Shoping App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='login'>
            <div className="login__container">
                <img src="/assets/logo_alt.png" className='login__logo' width='103' alt="" />
                <form className="login__card">
                    <h1 className='login__heading'>Sign-In</h1>
                    <label htmlFor="login-email">Email or mobile phone number</label>
                    <input type="text" id="login-email" />
                    <button type="submit" className='login__button'>Continue</button>
                    <p className="login__policy">By continuing, you agree to Amazon&apos;s <span className='login__hyperlink'>Conditions of Use</span> and <span className='login__hyperlink'>Privacy Notice.</span></p>
                </form>
                <div className="logon__newUser">
                    <span>New to Amazon?</span>
                </div>
                <Link href="/signup"><a className="login__createAc">Create your Amazon account</a></Link>
            </div>
            <LoginFooter/>
        </div>
    </>)
}

export default Login