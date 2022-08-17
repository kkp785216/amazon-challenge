export const initialState = {
    cart: [],
    loginUser: {}
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
                    cart: [...state.cart.filter(a=> a.sno !== action.sno)]
                }

            case 'LOGIN':
                return {
                    ...state,

                }

        default:
            return state;
    }
}

export default reducer