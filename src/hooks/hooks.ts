import type {AppDispatch} from '../app/store'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../app/store";
import {InitialStateType} from "../app/app-reducer";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = () => useSelector<AppRootStateType, InitialStateType>(state => state.app)

