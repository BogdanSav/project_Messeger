import socket from '../../../utils/socket-io.util';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MESSAGE } from '../../../redux/actions/actions';

export default function useChatMessage() {
    const dispatch = useDispatch();
    useEffect(() => {
        socket.on('message', (msg) => {
            dispatch({ type: GET_MESSAGE, payload: { msg } });
        });
    }, [dispatch])


}