import { ADD_NEW_CHAT, JOIN_CHAT } from '../actions/actions';

interface IAction {
    type: string
    payload: object
}
interface IState{
    currentID: number,
    allChats: Array<object>
}
const initialState: IState = {
    currentID:0,
    allChats:[{
        title: "frist",
        lastMsg: "adawdaw",
        id:0
    },
    {
        title: "second",
        lastMsg: "adawdaw",
        id:1
    }],
};
const chatsReducer = (state = initialState, action: IAction) => {
    console.log(state);
    switch (action.type) {
        case ADD_NEW_CHAT:
            return {...state, allChats: state.allChats.concat([Object.assign(action.payload,{id:state.allChats.length})])};
        case JOIN_CHAT: 
            return {...state, currentID: action.payload};    
        default: return state
    }
    
}
export default chatsReducer;