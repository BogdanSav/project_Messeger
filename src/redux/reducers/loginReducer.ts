import {LOGIN} from "../actions/actions";

interface IAction {
    type: string,
    payload: any,
}

const initialState = {};

function loginReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case LOGIN:
            console.log(`${action.payload}`);
            return {...state,...action.payload}
        default:
            return state;
    }

}

export default loginReducer;