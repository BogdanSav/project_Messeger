import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_MESSAGE,JOIN_CHAT} from '../../redux/actions/actions';
// import { RootState } from '../../redux/reducers/rootReducer';


const useSockets = () => {
    const dispatch = useDispatch();
    const[message, typeMessage] = useState('')
    // useEffect(() => {
    //    dispatch({type: JOIN_CHAT});
    // }, [dispatch]);
    const emitMessage = useCallback(()=>{
        dispatch({type:ADD_MESSAGE, payload:{message}})
        typeMessage("");
    },[dispatch,message]);
    const changeTextMessage = useCallback((e: BaseSyntheticEvent)=>{
        typeMessage(e.target.value);
    },[])
    return {message, changeTextMessage, emitMessage}
    
}

export default useSockets;