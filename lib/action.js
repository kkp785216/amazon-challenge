import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const action = async (dispatch, action) => {

    switch (action?.type) {
        case 'LOGIN':
            try {
                // Check if user loged in
                const q1 = query(collection(db, "users"), where("email", "==", action.email));
                const q2 = query(collection(db, "users"), where("phone", "==", action.email));
                const q1Shapshot = await getDocs(q1);
                const q2Shapshot = await getDocs(q2);
                const q1Data = q1Shapshot.docs.map(a => a.data());
                const q2Data = q2Shapshot.docs.map(a => a.data());
                if (q1Data.length >= 1 || q2Data.length >= 1) {
                    let logedInUser = (q1Data.length >= 1 && q1Data[0]) || (q2Data.length >= 1 && q2Data[0])
                    if (((q1Data.length >= 1 && q1Data[0]) || (q2Data.length >= 1 && q2Data[0])).password === action.password) {
                        process.browser && window.localStorage.setItem('user_amazon_challenge', JSON.stringify(logedInUser));
                        dispatch({
                            type: 'LOGIN',
                            payload: { logedIn: true, alert: 'success', message: 'Login Successfully', user: logedInUser }
                        })
                    }
                    else {
                        process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                        dispatch({
                            type: 'LOGIN',
                            payload: { logedIn: false, alert: 'warning', message: 'Wrong Password' }
                        })
                    }
                }
                else {
                    process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                    dispatch({
                        type: 'LOGIN',
                        payload: { logedIn: false, alert: 'warning', message: 'Invalid Credintials' }
                    })
                }
            } catch (error) {
                console.log(error)
                process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                dispatch({
                    type: 'LOGIN',
                    payload: { logedIn: false, alert: 'danger', message: 'Interval Server error' }
                })
            }

        case 'REMOVE_FROM_CART':
            dispatch({
                type: 'REMOVE_FROM_CART',
                sno: parseInt(action.sno)
            })

        default:
    }
}

export default action;