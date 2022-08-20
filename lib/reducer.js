import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
export const initialState = {
    cart: [],
    loginUser: (async () => {
        return process.browser  && window.localStorage.getItem('user_amazon_challenge') ?
            { logedIn: true, alert: 'success', message: 'Login Successfully', user: JSON.parse(window.localStorage.getItem('user_amazon_challenge')) } :
            { logedIn: false, alert: null, message: '' }
    })(),
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart.filter(a => a.sno !== action.sno)]
            }

        case 'LOGIN':
            // Check if user loged in
            const loginPromice = async () => {
                try {
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
                            return { logedIn: true, alert: 'success', message: 'Login Successfully', user: logedInUser }
                        }
                        else {
                            process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                            return { logedIn: false, alert: 'warning', message: 'Wrong Password' }
                        }
                    }
                    else {
                        process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                        return { logedIn: false, alert: 'warning', message: 'Invalid Credintials' }
                    }
                } catch (error) {
                    console.log(error)
                    process.browser && window.localStorage.setItem('user_amazon_challenge', null);
                    return { logedIn: false, alert: 'danger', message: 'Interval Server error' }
                }
            }
            return {
                ...state,
                loginUser: loginPromice()
            }

        default:
            return state;
    }
}

export default reducer