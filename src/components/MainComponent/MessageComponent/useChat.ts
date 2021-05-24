import socket from '../../../utils/socket-io.util';
import { useState } from 'react';
interface IMessage {
    username: string,
    text: string,
    time?: string
}

export default function useChatMessage() {
    
    const init: IMessage = { username: "", text: "" }
    const [msg, setMsg] = useState<IMessage>(init);
    socket.on('message', (data) => {
        setMsg(data);
    });
    return [msg];

}