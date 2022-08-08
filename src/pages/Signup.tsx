
import GoogleIcon from '@mui/icons-material/Google';


const Signup = () => {
    return (
        <section className="sign-up-page  bg-gradient-to-b from-sky-900 to-zinc-300   ">
            <main className='sign-up-card rounded-md'   >
                <button className='sign-with-google rounded-3xl border-2 text-slate-50 '><span><GoogleIcon /></span> Sign In with Google</button>
                <form>
                    <div className="form-item">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" name='fullname' />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='expamle@mail.com' />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <button className='text-slate-50 font-semibold text-base bg-sky-600 p-2  px-16 rounded-md' >SignUp</button>
                </form>
                <div className="login-option">
                    <h2 className='text-zinc-900' >Already have an acount ?</h2>
                    <button className='login-btn rounded-md text-zinc-900 border-2 border-zinc-900 p-2 text-base font-semibold px-12' >Login</button>
                </div>
            </main>
        </section>
    )
}

export default Signup
