import type {AppDispatch} from '../app/store'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../app/store";
import {UsersType, UserType} from "../app/types";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useUsersSelector = () => useSelector<AppRootStateType, UsersType[]>(state => state.users)
export const useUserSelector = () => useSelector<AppRootStateType, UserType>(state => state.user)

