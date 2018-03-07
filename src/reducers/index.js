import {combineReducers} from 'redux';
// Import các reducer 
import products from './product';
import itemEditting from './itemEditing';

const appReducers = combineReducers({
    products,
    itemEditting
});

export default appReducers;