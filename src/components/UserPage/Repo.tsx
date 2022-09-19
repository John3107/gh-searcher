import React from 'react';
import style from "./UserPage.module.scss";

type PropsType = {
    name: string
    stargazers_count: number
    forks_count: number
    setRepoName: (name: string) => void
}

export const Repo = ({name, stargazers_count, forks_count, setRepoName}: PropsType) =>
    <div className={style.userPageRepo} onClick={() => setRepoName(name)}>
        <span>{name}</span>
        <div className={style.userPageCounts}>
            <div>{forks_count}<span className={style.userPageCountsTitle}>Forks</span></div>
            <div>{stargazers_count}<span className={style.userPageCountsTitle}>Stars</span></div>
        </div>
    </div>
