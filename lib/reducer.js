export const initialState = {
    cart: []
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

        default:
            return state;
    }
}

export default reducer