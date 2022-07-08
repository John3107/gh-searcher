import React, {FC, useEffect, useState} from 'react';
import style from './../app/App.module.scss';
import {useAppDispatch, useUsersSelector} from "../hooks/hooks";
import {Navigate} from "react-router-dom";
import {UserPage} from "./UserPage";
import {getUserTC} from "../app/app-reducer";

export const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const data = useUsersSelector()
    const [user, setUser] = useState<string>('')

    useEffect(() => {
       user && dispatch(getUserTC(user))
    }, [user])

    if (user) {
        return <Navigate to={`/user/${user}`}/> && <UserPage/>
    }

    return (
        <div className={style.mainPage}>
            <h1 className={style.mainPageTitle}>GitHub searcher</h1>
            <input placeholder={'Search for Users'} className={style.mainPageInput}/>
            <div className={style.mainPageSections}>{
                data.map(el => <div className={style.section} key={el.id} onClick={() => setUser(el.login)}>
                    <div className={style.sectionMain}>
                        <img className={style.mainAvatar} src={el.avatar_url}/>
                        <span>{el.login}</span>
                    </div>
                    <span className={style.mainRepo}>Repo: ##</span>
                </div>)
            }</div>
        </div>
    );
}
