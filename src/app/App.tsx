import React, {useEffect} from 'react';
import style from './App.module.scss';
import {getUsersTC} from "./app-reducer";
import {useAppDispatch} from "../hooks/hooks";
import {AppRouting} from "../routing/appRouting";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../components/MainPage/MainPage";
import {UserPage} from "../components/UserPage/UserPage";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    return (
        <div className={style.app}>
            {/*<AppRouting/>*/}
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/user/:ghLogin" element={<UserPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
