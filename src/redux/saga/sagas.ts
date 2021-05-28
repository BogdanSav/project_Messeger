import { select, takeEvery, takeLeading } from "redux-saga/effects";
import { ADD_MESSAGE, JOIN_CHAT, LOGIN, SIGNUP_ACTION } from "../actions/actions";
import socket from '../../utils/socket-io.util';

const urlSignup: string = "/signup";
const urlSignin: string = "/signin";
// const setToken = (token :string) =>{
//     document.cookie = token;
// }
// const getToken = () =>{
//     const token = document.cookie;
//     return token;
// }
export function* sagaWatcher() {
    yield takeLeading(SIGNUP_ACTION, signUp);
    yield takeLeading(LOGIN, signIn);
    yield takeEvery(ADD_MESSAGE, emitChatMessage);
    yield takeEvery(JOIN_CHAT, joinChatRoom);
}


function* emitChatMessage() {
    const msg: string = yield select(state => state.msg.lastMessage);
    yield console.log(msg)
    yield socket.emit('chatMessage', msg); 
}
function* joinChatRoom() {
   
    const username: string = yield select(state=>state.login.email);
    const room:string = yield select(state=>state.chats.allChats[state.chats.currentID].title); 
    // yield console.log(username,room);
    yield socket.emit('joinRoom', { username, room })
}
function* signUp() {
    const data: object = yield select(state => state.signup);
    yield console.log(data);
    try {
        const response: PromiseFulfilledResult<any> = yield fetch(urlSignup, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            mode: 'no-cors',
            body: JSON.stringify(data)
        })
        yield console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}
function* signIn() {
    const data: object = yield select(state => state.login);
    try {
        const response: PromiseFulfilledResult<any> = yield fetch(urlSignin, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            mode: 'no-cors',
            body: JSON.stringify(data)
        })
        yield console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}


