import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Iuser } from '../types';
import { addUser } from './user.service'

const provider = new GoogleAuthProvider();
const auth = getAuth();


export const signInWithGoogle = async () => {
    let resUser: Iuser | null
    try {
        const { user } = await signInWithPopup(auth, provider)
        resUser = { photoURL: user.photoURL, email: user.email, displayName: user.displayName }
        return resUser
    } catch (err) {
        console.log(err)
        return null
    }
}