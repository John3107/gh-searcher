import React, {useEffect} from 'react';
import style from './App.module.scss';
import {getUsersTC} from "./app-reducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../components/MainPage/MainPage";
import {UserPage} from "../components/UserPage/UserPage";

const App = () => {
    const data = useAppSelector()
    const dispatch = useAppDispatch()

    useEffect(() => dispatch(getUsersTC()), [dispatch])

    return <div className={style.app}>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
                {!data.awaiting && <Route path="/user/:ghLogin" element={<UserPage/>}/>}
            </Routes>
        </div>
}

export default App;
