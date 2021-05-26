import {combineReducers} from "redux";
import singupReducer from "./singupReducer";
import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer'
import chatsReducer from './chatsReducer';
const rootReducer = combineReducers({
    signup: singupReducer,
    login: loginReducer,
    msg: messagesReducer,
    chats: chatsReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
