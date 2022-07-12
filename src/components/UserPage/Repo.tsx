import React from 'react';
import {ReposType} from "../../app/types";
import style from "./UserPage.module.scss";

export const Repo = ({name, stargazers_count, forks_count}: ReposType) => {
    return (
        <div className={style.userPageRepo}>
            <span>{name}</span>
            <div className={style.userPageCounts}>
                <div>{forks_count}<span className={style.userPageCountsTitle}>Forks</span></div>
                <div>{stargazers_count}<span className={style.userPageCountsTitle}>Stars</span></div>
            </div>
        </div>

    )
}
