import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {user, users} from "./app-reducer";

export const rootReducer = combineReducers({
    users,
    user
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

