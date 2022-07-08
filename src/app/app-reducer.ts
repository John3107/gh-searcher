import {ghPagesAPI} from "../api/api";
import {AppThunk} from "./store";
import {UsersType, UserType} from "./types";
import {AxiosResponse} from "axios";

const initialState: InitialStateType = {
    users: [],
    user: {login: 'Ivan'}
}

export const users = (state: InitialStateType = initialState, action: ActionsType): UsersType[] => {
    switch (action.type) {
        case 'GET-USERS':
            return action.usersArray.map(el => el)
        default:
            return state.users
    }
}

export const user = (state: InitialStateType = initialState, action: ActionsType): UserType | object => {
    switch (action.type) {
        case 'GET-USER':
            return action.currentUser
        default:
            return {...state.user}
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
                 localStorage.setItem(`${login}`, JSON.stringify(res.data))
                 dispatch(setUserAC(res.data))
            })
            .catch((err: string) => {
                console.log(err)
            })
    }
}

export const setUsersAC = (usersArray: UsersType[]) => ({type: 'GET-USERS', usersArray} as const)
export const setUserAC = (currentUser: UserType) => ({type: 'GET-USER', currentUser} as const)

export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setUserActionType = ReturnType<typeof setUserAC>

export type InitialStateType = {
    users: Array<UsersType>,
    user: UserType | object
}

type ActionsType = setUsersActionType | setUserActionType