export const initialState = {
    cart: [],
    loginUser: { logedIn: false, alert: null, message: '' },
    payment: {method: null, card: {}},
    address: null
}
const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...payload.items]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart.filter(a => a.sno !== payload.sno)]
            }

        case 'LOGIN':
            return {
                ...state,
                loginUser: payload
            }

        case 'ADDRESS':
            return {
                ...state,
                address: payload
            }

        case 'PAYMENT_METHOD':
            return {
                ...state,
                payment: payload
            }

        default:
            return state;
    }
}

export default reducer