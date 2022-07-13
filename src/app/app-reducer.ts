import {ghPagesAPI} from "../api/api";
import {AppThunk} from "./store";
import {ReposType, UsersType, UserType} from "./types";
import {AxiosResponse} from "axios";

const initialState: InitialStateType = {
    users: [],
    user: {
        avatar_url: '',
        login: '',
        email: '',
        location: '',
        following: 0,
        followers: 0,
        created_at: '',
        bio: null,
        repos: []
    }
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-USERS':
            return {
                ...state,
                users: action.usersArray.map(el => ({
                    login: el.login, id: el.id, avatar_url: el.avatar_url, numRepos: el.numRepos}))
            }
        case 'GET-USER':
            return {
                ...state, user: {
                    login: action.currentUser.login,
                    email: action.currentUser.email,
                    location: action.currentUser.location,
                    following: action.currentUser.following,
                    followers: action.currentUser.followers,
                    created_at: action.currentUser.created_at,
                    avatar_url: action.currentUser.avatar_url,
                    bio: action.currentUser.bio,
                    repos: action.currentUser.repos
                }
            }
        case 'GET-REPOS':
            return {
                ...state, user: { ...state.user, repos: action.reposArray}
            }
        default:
            return state
    }
}

export const getUsersTC = (): AppThunk => (dispatch) => {
    let dataFromLocalStorage = localStorage.getItem('users-data')
    if (dataFromLocalStorage) {
        dispatch(setUsersAC(JSON.parse(dataFromLocalStorage)))
    } else {
        ghPagesAPI.getUsers()
            .then((res: AxiosResponse) => {
                localStorage.setItem('users-data', JSON.stringify(res.data))
                dispatch(setUsersAC(res.data))
            })
            .catch((err: string) => {
                console.log(err)
            })
    }
}

export const getUserTC = (login: string): AppThunk => (dispatch) => {
    let dataFromLocalStorage = localStorage.getItem(`${login}`)
    if (dataFromLocalStorage) {
        dispatch(setUserAC(JSON.parse(dataFromLocalStorage)))
    } else {
        ghPagesAPI.getUser(login)
            .then((res: AxiosResponse) => {
                ghPagesAPI.getRepos(login)
                    .then((response: AxiosResponse) => {
                        let userWithRepos = {
                            ...res.data,
                            repos: response.data.map((el: ReposType) => ({
                                name: el.name,
                                stargazers_count: el.stargazers_count,
                                forks_count: el.forks_count,
                                id: el.id
                            }))
                        }
                        let dataFromLocalStorage = localStorage.getItem('users-data')
                        let usersDataWithReposCount = dataFromLocalStorage !== null &&
                            JSON.parse(dataFromLocalStorage).map((el: UsersType) =>
                                el.login === res.data.login
                                    ? ({...el, numRepos: response.data.length}) : el)
                        localStorage.setItem(`${login}`, JSON.stringify(userWithRepos))
                        localStorage.setItem('users-data', JSON.stringify(usersDataWithReposCount))
                        dispatch(setUserAC(userWithRepos))
                    })
                    .catch((err: string) => {
                        console.log(err)
                    })
            })
            .catch((error: string) => {
                console.log(error)
            })
    }
}

export const userSearchedTC = (inputValue: string): AppThunk => (dispatch) => {
    let dataFromLocalStorage = localStorage.getItem('users-data')
    if (dataFromLocalStorage) {
        let filteredDataFromLocalStorage = JSON.parse(dataFromLocalStorage)
            .filter((el: UsersType) => el.login.includes(inputValue))
        dispatch(setUsersAC(filteredDataFromLocalStorage))
    }
}

export const repoSearchedTC = (login: string, inputValue: string): AppThunk => (dispatch) => {
    let dataFromLocalStorage = localStorage.getItem(`${login}`)
    if (dataFromLocalStorage) {
        let filteredDataFromLocalStorage = JSON.parse(dataFromLocalStorage).repos
            .filter((el: ReposType) => el.name.includes(inputValue))
        dispatch(setReposAC(filteredDataFromLocalStorage))
    }
}

export const setUsersAC = (usersArray: UsersType[]) => ({type: 'GET-USERS', usersArray} as const)
export const setUserAC = (currentUser: UserType) => ({type: 'GET-USER', currentUser} as const)
export const setReposAC = (reposArray: ReposType[]) => ({type: 'GET-REPOS', reposArray} as const)

export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setUserActionType = ReturnType<typeof setUserAC>
export type setReposActionType = ReturnType<typeof setReposAC>

export type InitialStateType = {
    users: Array<UsersType>,
    user: UserType,

}

type ActionsType = setUsersActionType | setUserActionType | setReposActionType
