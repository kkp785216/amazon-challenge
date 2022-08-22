import React from 'react'

const LoginFooter = () => {
    return (
        <div className="login__footer">
            <div className="login__footer__border"></div>
            <div className="login__footer__links">
                <span className='login__hyperlink'>Conditions of Use</span>
                <span className='login__hyperlink'>Privacy Notice</span>
                <span className='login__hyperlink'>Help</span>
            </div>
            <span className="login__footer__copyright">&copy; {new Date().getFullYear()}, Amazon.com Created by Krishna Prajapati</span>
        </div>
    )
}

export default LoginFooter