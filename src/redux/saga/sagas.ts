import {select,takeLeading} from "redux-saga/effects";
import {SIGNUP_ACTION} from "../actions/actions";

const url : string = "https://webhook.site/4fc1bb75-f7ae-4dd6-9f46-2f002aa83466";
export function* sagaWatcher(){
    yield takeLeading(SIGNUP_ACTION,signUp);
}

function* signUp(){
    const data:object = yield select(state=>state.signup);
    yield console.log(data);
    try {
       const response:PromiseFulfilledResult<any> = yield  fetch(url,{
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


