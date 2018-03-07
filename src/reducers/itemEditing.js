import * as Types from './../constants/ActionTypes';

const initialState = {
    id: '',
    name:'',
    price: '',
    status: false
}

const itemEditting = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCTS: {
            return action.product;
        }
        default: return state;
    }
}

export default itemEditting;