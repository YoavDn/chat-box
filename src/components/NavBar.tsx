import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar px-4 bg-sky-900 font-bold ">
            <h2 className="text-slate-50 text-2xl">ChatBox</h2>
            <div className="nav-links flex">
                <Link className="text-slate-50 px-4 hover:underline hover:decoration-lime-400 " to="/">Home</Link>
                <Link className="text-slate-50 px-4  hover:underline hover:decoration-rose-200" to="/chat">Chat</Link>
                <Link className="text-slate-50 px-4 hover:underline decoration-green-400" to="/">Profile</Link>
            </div>
        </div>
    )
}

export default NavBar