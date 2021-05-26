import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
const useChatInfo = () => {
    const chatInfo= useSelector<RootState>(state => state.chats);
    const [state, setState] = useState<any>([]);
    useEffect(() => {
        setState(chatInfo);
    }, [chatInfo]);

    return [state];


}
export default useChatInfo;