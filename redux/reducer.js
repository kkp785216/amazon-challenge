export const initialState = {
    cart: [],
    loginUser: { logedIn: false, alert: null, message: '' }
}
const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload.item]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart.filter(a => a.sno !== payload.sno)]
            }

        case 'UPDATE_CART':
            return {
                ...state,
                cart: [...state.cart.filter(a => a.sno !== payload.sno)]
            }

        case 'LOGIN':
            return {
                ...state,
                loginUser: payload
            }

        default:
            return state;
    }
}

export default reducer