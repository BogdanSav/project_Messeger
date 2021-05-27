import { BaseSyntheticEvent, useCallback, useState } from 'react';
import {useDispatch} from 'react-redux'
import { ADD_NEW_CHAT } from '../../../redux/actions/actions';

const useChatInfo = () => {
    const dispatch = useDispatch();
   const [state,setState] = useState<any>("");
   const changeChatName = useCallback((e: BaseSyntheticEvent)=>{
       setState(e.target.value);
   },[]);
   const addChat = useCallback(()=>{
        dispatch({type:ADD_NEW_CHAT,payload:{title:state,lastMsg:""}})
   },[state,dispatch])
  
   return [state,changeChatName,addChat];

}
export default useChatInfo;