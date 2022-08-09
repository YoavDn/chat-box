import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iuser } from '../types'

interface IinitialState {
    users: Iuser[],
    loggedInUser: Iuser | null,
}

const initialState: IinitialState = {
    users: [],
    loggedInUser: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => state,
        addUser: (state, action: PayloadAction<Iuser>) => {
            state.users.push(action.payload)
        }

    }
})

