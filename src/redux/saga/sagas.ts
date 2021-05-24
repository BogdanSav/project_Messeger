import {select,take,takeEvery,takeLeading, put} from "redux-saga/effects";
import {ADD_MESSAGE, EMIT_MESSAGE, JOIN_CHAT, LOGIN, SIGNUP_ACTION, GET_MESSAGE} from "../actions/actions";
import socket from '../../utils/socket-io.util';
import { StringDecoder } from "node:string_decoder";

const urlSignup : string = "/signup";
const urlSignin: string = "/signin";
// const setToken = (token :string) =>{
//     document.cookie = token;
// }
// const getToken = () =>{
//     const token = document.cookie;
//     return token;
// }
export function* sagaWatcher(){
    yield takeLeading(SIGNUP_ACTION,signUp);
    yield takeLeading(LOGIN,signIn);
    yield takeEvery(JOIN_CHAT,joinChatRoom);    
    yield takeEvery(ADD_MESSAGE,emitChatMessage);
}

function* emitChatMessage(){
    
    const msg:string = yield select(state=>state.msg.lastMessage);
    
    yield console.log(msg)
    yield socket.emit('chatMessage', msg);
    yield socket.on('message', (data)=>{ 
    })
}
function* joinChatRoom (){
    const username = "Bogdan";
    const room = "firstRoom";
    yield socket.emit('joinRoom',{username, room})
}
function* signUp(){
    const data:object = yield select(state=>state.signup);
    yield console.log(data);
    try {
       const response:PromiseFulfilledResult<any> = yield  fetch(urlSignup,{
            method : "POST",
            headers :{
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
           mode: 'no-cors',
           body : JSON.stringify(data)
        })
        yield console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}
function* signIn(){
    const data: object = yield select(state=>state.login);
    try{
        const response:PromiseFulfilledResult<any> = yield  fetch(urlSignin,{
            method : "POST",
            headers :{
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
           mode: 'no-cors',
           body : JSON.stringify(data)
        })
        yield console.log(response); 
    }
    catch(e){
        console.log(e);
    }
}


