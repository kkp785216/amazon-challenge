export const initialState = {
    cart: [],
    loginUser: { logedIn: false, alert: null, message: '' }
    // process.browser && window.localStorage.getItem('user_amazon_challenge') ?
    // { logedIn: true, alert: 'success', message: 'Login Successfully', user: JSON.parse(window.localStorage.getItem('user_amazon_challenge')) } :
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
            return {
                ...state,
                loginUser: action.payload
            }

        default:
            return state;
    }
}

export default reducer