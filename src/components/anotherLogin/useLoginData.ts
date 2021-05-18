import React, { useState, useCallback, BaseSyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import {LOGIN} from '../../redux/actions/actions'

const useLoginData = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeEmail = useCallback((event: React.BaseSyntheticEvent) => {
        setEmail(event.target.value);
    }, []);
    const changePassword = useCallback((event: React.BaseSyntheticEvent) => {
        setPassword(event.target.value);
    }, []);
    const onSubmit=(event:BaseSyntheticEvent):void=>{
        event.preventDefault();
        dispatch({type: LOGIN ,payload:{email, password}});
        setEmail('');
        setPassword('');
    }
    return [email,password,changeEmail,changePassword, onSubmit];

}
export default useLoginData;