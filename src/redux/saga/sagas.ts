import {select,takeLeading} from "redux-saga/effects";
import {LOGIN, SIGNUP_ACTION} from "../actions/actions";

const urlSignup : string = "/signup";
const urlSignin: string = "/signin";
const setToken = (token :string) =>{
    document.cookie = token;
}
const getToken = () =>{
    const token = document.cookie;
    return token;
}
export function* sagaWatcher(){
    yield takeLeading(SIGNUP_ACTION,signUp);
    yield takeLeading(LOGIN,signIn);
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


