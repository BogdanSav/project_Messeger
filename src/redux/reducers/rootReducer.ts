import {combineReducers} from "redux";
import singupReducer from "./singupReducer";
import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer'
const rootReducer = combineReducers({
    signup: singupReducer,
    login: loginReducer,
    msg: messagesReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
