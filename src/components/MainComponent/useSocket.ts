import io from 'socket.io-client';
import { useState, useEffect } from 'react';

interface IMessage {
    username?:string,
    text?:string,
    time?:string
}
const path: string = 'http://localhost:4000';
export const socket = io(path);
const useSockets = () => {
    const [msg, setMsg] = useState<IMessage>({});
    useEffect(() => {
        socket.emit('joinRoom', { username: 'bogdan', room: 'first' });
    }, []);
    socket.on('message', (data) => {
        setMsg(data);
    }
    );
    return [msg];
}

export default useSockets;