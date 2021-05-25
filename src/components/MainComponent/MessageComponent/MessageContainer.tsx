import React, {useEffect, useState } from 'react';
import MessageComponent from './MessageComponent';
import useChatMessage from './useChat';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
function MessageContainer() {
    useChatMessage();
    const loadedMessages = useSelector<RootState>(state => state.msg.allMessages);
    const [messages, setMessages] = useState<any>([]);
    useEffect(() => {
        setMessages(loadedMessages);
    }, [loadedMessages]);

    return (
        messages.map((data: any) => (
            <MessageComponent username={data.username} msg={data.text} />
        ))

    );
}

export default MessageContainer;