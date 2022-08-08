import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
    fullName: string,
    email: string,
    id?: string
}

const initialState: IUserState[] = [{
    fullName: 'yoav',
    email: 'yoav@gmail.com',
    id: '39f31'
}]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => state
    }
})

