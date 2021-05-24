import { ADD_MESSAGE, GET_MESSAGE } from "../actions/actions";

const initialState = {
    lastMessage: "",
    allMessages: []
};
const messagesReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case ADD_MESSAGE:
            console.log(action.type,action.payload);
             return {...state, lastMessage: action.payload.message}
        case GET_MESSAGE:
            console.log(state.allMessages);
             return {...state,allMessages: state.allMessages.concat(action.payload.data)}    
        default: return state;
    }
}
export default messagesReducer;