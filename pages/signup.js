import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../lib/firebase'
import { useRouter } from 'next/router'
import LoginFooter from '../components/LoginFooter';

const SignUp = () => {

    const router = useRouter();

    const [signupForm, setSignupForm] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        document.getElementById('signup-name')?.focus();
    }, []);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // Create a reference to the cities collection
        const userRef = doc(collection(db, "users"));

        // Check if user already exist
        const q1 = query(collection(db, "users"), where("email", "==", signupForm.email));
        const q2 = query(collection(db, "users"), where("phone", "==", signupForm.phone));
        try {
            const q1Shapshot = await getDocs(q1);
            const q2Shapshot = await getDocs(q2);
            if (q1Shapshot.docs.map(a => a.data()).length === 0 && q2Shapshot.docs.map(a => a.data()).length === 0) {
                // Add a new document in collection "users"
                setDoc(userRef, { ...signupForm, _id: userRef.id })
                    .then(data => { router.push('/login') })
                    .catch(error => { console.log(error) })
            }
            else {
                console.log('user alrady exist.');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <Head>
            <title>Amazon Challenge - Login</title>
            <meta name="description" content="Amazon Shoping App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='signup'>
            <div className="signup__container">
                <Link href='/'><a className='signup__logo'><img src="/assets/logo_alt.png" width='103' alt="" /></a></Link>
                <form className="signup__card" onSubmit={handleSignupSubmit}>
                    <h1 className='signup__heading'>Create Account</h1>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-name">Your Name</label>
                        <input type="text" id="signup-name" value={signupForm.name} onChange={e => { setSignupForm({ ...signupForm, name: e.target.value }) }} name="signup_name" placeholder='Fist and last name' />
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-mobile">Mobile number</label>
                        <div className='signup__mobile__inputWrapper'>
                            <select name="signup_country" defaultValue='+91' id="signup-country">
                                <option value="+91">India +91</option>
                            </select>
                            <input type="mobile" id="signup-mobile" value={signupForm.phone} onChange={e => { setSignupForm({ ...signupForm, phone: e.target.value }) }} name="signup_mobile" placeholder='Mobile number' />
                        </div>
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-email">Email (optional)</label>
                        <input type="email" id="signup-email" value={signupForm.email} onChange={e => { setSignupForm({ ...signupForm, email: e.target.value }) }} name='signup_email' />
                    </div>
                    <div className='signup__inputWrapper'>
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" id="signup-password" value={signupForm.password} onChange={e => { setSignupForm({ ...signupForm, password: e.target.value }) }} name='signup_password' />
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
            <LoginFooter />
        </div>
    </>)
}

export default SignUp