import React, {useEffect, useState } from 'react';
import MessageComponent from './MessageComponent';
import useChatMessage from './useChat';
// import { useSelector } from 'react-redux';

function MessageContainer() {
    const [messages] = useChatMessage();
    return (
        messages.map((data: any) => (
            <MessageComponent username={data.username} msg={data.text} />
        ))

    );
}

export default MessageContainer;