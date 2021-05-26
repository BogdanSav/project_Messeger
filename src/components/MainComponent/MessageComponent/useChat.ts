import socket from '../../../utils/socket-io.util';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MESSAGE } from '../../../redux/actions/actions';
import { RootState } from '../../../redux/reducers/rootReducer';
export default function useChatMessage() {
    const dispatch = useDispatch();
    useEffect(() => {
        socket.on('message', (msg) => {
            dispatch({ type: GET_MESSAGE, payload: { msg } });
        });
    }, [dispatch])
    const loadedMessages = useSelector<RootState>(state => state.msg.allMessages);
    const [messages, setMessages] = useState<any>([]);
    useEffect(() => {
        setMessages(loadedMessages);
    }, [loadedMessages]);
    return [messages];
}