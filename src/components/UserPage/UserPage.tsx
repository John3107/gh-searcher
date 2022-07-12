import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import style from "./UserPage.module.scss";
import {Repo} from "./Repo";

export const UserPage: FC = () => {
    const data = useAppSelector()
    const [date, setDate] = useState<string[]>([])

    useEffect(() => {
        const dateUpdater = () => {
            return data.user.created_at.split(/[T Z*]+/)
        }
        setDate(dateUpdater())

    }, [data.user.created_at])

    return (
        <div className={style.userPage}>
            <div className={style.userPageHeader}>
                <h1 className={style.userPageTitle}>GitHub searcher</h1>
                <div className={style.userPageMain}>
                    <img className={style.userPageAvatar} src={data.user.avatar_url}/>
                    <div className={style.userPageDescription}>
                        <span>{data.user.login}</span>
                        <span>{data.user.email}</span>
                        <span>{data.user.location}</span>
                        <span>{date[0]} {date[1]}</span>
                        <span>{data.user.followers} Followers</span>
                        <span>Following {data.user.following}</span>
                    </div>
                </div>
                <div className={style.userPageBio}>{data.user.bio}</div>
            </div>
            <input placeholder={'Search for User`s Repositories'} className={style.userPageInput}/>
            <div className={style.userPageBody}>
                {data.user.repos.map(el => <Repo name={el.name}
                                                 stargazers_count={el.stargazers_count}
                                                 forks_count={el.forks_count}
                                                 key={el.id}/>)}
            </div>
        </div>
    );
}

