import * as React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';


const Signup = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(email, password, fullName)
        clearInputs()
    }

    const clearInputs = () => {
        setEmail('')
        setFullName('')
        setPassword('')
    }

    return (
        <section className="sign-up-page  bg-gradient-to-b from-sky-900 to-zinc-300   ">
            <main className='sign-up-card rounded-md'   >
                <button className='sign-with-google  border-2 text-slate-50 '><span><GoogleIcon /></span> Sign In with Google</button>
                <form onSubmit={handleSumbit}>
                    <div className="form-item">
                        <label htmlFor="fullname">Full Name</label>
                        <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" name='fullname' />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' placeholder='expamle@mail.com' />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='password' />
                    </div>
                    <button className='text-slate-50 font-semibold text-xl bg-blue-500 p-2  px-12 rounded-md' >Signup</button>
                </form>
                <div className="login-option">
                    <h2 className='text-zinc-900' >Already have an acount ?</h2>
                    <button className='login-btn rounded-md text-zinc-900 border-2 border-zinc-900 p-2 text-base font-semibold px-12' >Login</button>
                </div>
            </main>
        </section >
    )
}

export default Signup
