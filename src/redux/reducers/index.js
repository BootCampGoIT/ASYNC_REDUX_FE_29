import { combineReducers } from 'redux';
import todo from './todoReducer';
import loader from './loaderReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    todo,
    loader,
    error
})
export default rootReducer;