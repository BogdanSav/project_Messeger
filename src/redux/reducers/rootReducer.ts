import {combineReducers} from "redux";
import singupReducer from "./singupReducer";
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    signup: singupReducer,
    login: loginReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
