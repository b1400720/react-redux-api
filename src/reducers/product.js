import * as Types from './../constants/ActionTypes';
const initialState = [];


const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS: {
            state = action.products
            return [...state];
        }
        case Types.DELETE_PRODUCTS: {
            let index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index,1);
            }
            return [...state];
        }
        case Types.ADD_PRODUCTS: {
            state.push(action.product);
            return [...state];
        }

        case Types.UPDATE_PRODUCTS: {
            let index = findIndex(state, action.product.id);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];
        }

        default: return [...state];
    }
}

export default products;

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}