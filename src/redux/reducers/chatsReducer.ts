import { ADD_NEW_CHAT } from '../actions/actions';

interface IAction {
    type: string
    payload: object
}

const initialState: Array<object> = [
    {
        title: "frist",
        lastMsg: "adawdaw",
    },
    {
        title: "second",
        lastMsg: "adawdaw",
    }
];
const chatsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_NEW_CHAT:
            return state.concat([action.payload]);
        default: return state
    }
}
export default chatsReducer;