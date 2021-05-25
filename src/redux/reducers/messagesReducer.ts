import { ADD_MESSAGE, GET_MESSAGE } from "../actions/actions";

interface IState {
    lastMessage: string,
    allMessages: Array<object>
}

const initialState: IState  = {
    lastMessage: "",
    allMessages :[]
};
const messagesReducer = (state = initialState, action:{type:string ,payload:any}) =>{
    switch(action.type){
        case ADD_MESSAGE:
            console.log(action.type,action.payload);
             return {...state, lastMessage: action.payload.message}
        case GET_MESSAGE:
            console.log(state.allMessages);
             return {...state,allMessages: state.allMessages.concat([action.payload.data])}    
        default: return state;
    }
}
export default messagesReducer;