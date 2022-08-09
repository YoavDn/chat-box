import { useAppDispatch } from "../hooks"
import { userSlice } from "../store/userSlice"
import { Iuser } from "../types"

export const addUser = (user: Iuser): void => {
    const disptach = useAppDispatch()
    console.log(user)
    disptach(userSlice.actions.addUser(user))
}