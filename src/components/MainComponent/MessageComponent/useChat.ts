import socket from '../../../utils/socket-io.util';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MESSAGE } from '../../../redux/actions/actions';
interface IMessage {
    username: string,
    text: string,
    time?: string
}

export default function useChatMessage() {
    const dispatch = useDispatch();
    const init: IMessage = { username: "", text: "" }
    const [msg, setMsg] = useState<IMessage>(init);
    useEffect(()=>{
        socket.on('message', (data) => {
            setMsg(data);
            // dispatch({type: GET_MESSAGE,payload:{ data}})
        });
    },[])
    
    return [msg];

}