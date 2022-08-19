import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const initialState = {
    cart: [],
    // loginUser: localStorage.getItem('user') ?
    //     { logedIn: true, message: 'Login Successfully', user: JSON.parse(localStorage.getItem('user')) } :
    //     { logedIn: false, message: '' }
    loginUser: { logedIn: false, message: '' }
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
            const hello = async () => {
                try {
                    const q1 = query(collection(db, "users"), where("email", "==", action.email));
                    const q2 = query(collection(db, "users"), where("phone", "==", action.email));
                    const q1Shapshot = await getDocs(q1);
                    const q2Shapshot = await getDocs(q2);
                    const q1Data = q1Shapshot.docs.map(a => a.data());
                    const q2Data = q2Shapshot.docs.map(a => a.data());
                    if (q1Data.length >= 1 || q2Data.length >= 1) {
                        let logedInUser = (q1Data.length >= 1 && q1Data[0]) || (q2Data.length >= 1 && q2Data[0])
                        if (logedInUser.password === action.pasword) {
                            localStorage.setItem('user', JSON.stringify(logedInUser));
                            return {
                                ...state,
                                loginUser: { logedIn: true, message: 'Login Successfully', user: logedInUser }
                            }
                        }
                        else {
                            localStorage.removeItem('user')
                            return {
                                ...state,
                                loginUser: { logedIn: false, message: 'Wrong Password' }
                            }
                        }
                    }
                    else {
                        // localStorage.removeItem('user')
                        localStorage.setItem('user', 'hello')
                        return {
                            ...state,
                            loginUser: { logedIn: false, message: 'Invalid Credintials' }
                        }
                    }
                } catch (error) {
                    return {
                        ...state,
                        loginUser: { logedIn: false, message: 'Interval Server error' }
                    }
                }
            }
            return hello();

        default:
            return state;
    }
}

export default reducer