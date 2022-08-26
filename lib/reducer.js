export const initialState = {
    cart: [],
    loginUser: { logedIn: false, alert: null, message: '' }
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