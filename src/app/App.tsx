import React, {useEffect} from 'react';
import style from './App.module.scss';
import {getUsersTC} from "./app-reducer";
import {useAppDispatch} from "../hooks/hooks";
import {AppRouting} from "../routing/appRouting";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    return (
        <div className={style.app}>
            <AppRouting/>
        </div>
    );
}

export default App;
