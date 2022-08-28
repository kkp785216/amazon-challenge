import { collection, getDocs, doc, getDoc, setDoc, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import store from './store'

const action = (action) => {
    const { cart, loginUser } = store.getState();
    console.log(cart)
    return async (dispatch) => {
        switch (action.type) {
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
                            process.browser && window.localStorage.setItem('user_amazon_challenge', logedInUser._id);
                            dispatch({
                                type: 'LOGIN',
                                payload: { logedIn: true, alert: 'success', message: 'Login Successfully', user: logedInUser }
                            });
                        }
                        else {
                            process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                            dispatch({
                                type: 'LOGIN',
                                payload: { logedIn: false, alert: 'warning', message: 'Wrong Password' }
                            });
                        }
                    }
                    else {
                        process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                        dispatch({
                            type: 'LOGIN',
                            payload: { logedIn: false, alert: 'warning', message: 'Invalid Credintials' }
                        });
                    }
                } catch (error) {
                    console.log(error)
                    process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                    dispatch({
                        type: 'LOGIN',
                        payload: { logedIn: false, alert: 'danger', message: 'Interval Server error' }
                    });
                }
                break;

            case 'DEFAULT_LOGIN':
                try {
                    const q1Shapshot = await getDoc(doc(db, "users", action.user));
                    if (q1Shapshot.exists()) {
                        console.log(q1Shapshot.data());
                        dispatch({
                            type: 'LOGIN',
                            payload: { logedIn: true, alert: 'success', message: 'Login Successfully', user: q1Shapshot.data() }
                        });
                    } else {
                        console.log("No such document!");
                    }
                } catch (err) {
                    console.log(err);
                }
                break;

            case 'ADD_TO_CART':
                if (loginUser.logedIn) {
                    try {
                        const cartRef = doc(collection(db, "cart"));
                        let res = await setDoc(cartRef, {
                            ...action.item,
                            _id: cartRef.id
                        });
                        // dispatch({
                        //     type: 'ADD_TO_CART',
                        //     payload: { item: action.item }
                        // });
                    } catch (error) {
                        console.log("Item adding to card faild:", error);
                    }
                } else {
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: { item: action.item }
                    });
                }
                break;

            case 'REMOVE_FROM_CART':
                dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: { sno: parseInt(action.sno) }
                });
                break;

            case 'UPDATE_CART':
                dispatch({
                    type: 'UPDATE_CART',
                    payload: { sno: parseInt(action.sno) }
                });
                break;

            default:
                break;
        }
    }
}

export default action;