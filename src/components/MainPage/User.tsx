import React from 'react';
import style from './MainPage.module.scss';

type PropsType = {
    setUser: (login: string) => void
    login: string
    avatar_url: string,
    numRepos?: number
}
export const User = ({setUser, login, avatar_url, numRepos}: PropsType) => {
    return (
        <div className={style.section} onClick={() => setUser(login)}>
            <div className={style.sectionMain}>
                <img className={style.mainAvatar} src={avatar_url}/>
                <span>{login}</span>
            </div>
            <span className={style.mainRepo}>Repo: {numRepos ? numRepos : '##'}</span>
        </div>

    )
}
