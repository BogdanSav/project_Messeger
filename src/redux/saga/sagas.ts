import {put,select,takeLeading} from "redux-saga/effects";
import {SIGNUP_ACTION} from "../actions/actions";

const url : string = "/signup";
export function* sagaWatcher(){
    yield takeLeading(SIGNUP_ACTION,signUp);
}

function* signUp(){
    const data = select(state=>state.signUp);
    try {
       const response: PromiseFulfilledResult<any> = yield  fetch(url,{
            method : "POST",
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
    }
    catch (e) {
        console.log(e);
    }
}
