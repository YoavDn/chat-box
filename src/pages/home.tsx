import { useNavigate } from "react-router";

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="home-page flex flex-col  px-10 md:px-28  bg-gradient-to-b from-sky-900 to-zinc-300   ">
            <h2 className=" hero-title text-slate-50 text-2xl md:text-3xl lg:text-5xl    tracking-tight font-extrabold " >
                Stay <span className="underline decoration-blue-400">connected</span>  with your friends at <span className="underline  decoration-amber-400">any</span>  time and chat freely <span className="underline decoration-rose-300">without</span>  worrieing.
            </h2>
            <p className="text-zinc-300 md:px-24  text-base pt-3 text-center md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quaerat officiis veritatis mollitia maiores aliquam error ab nulla aut aperiam!</p>
            <div className="home-btns flex flex-col  justify-between md:flex-row  w-2/1  pt-12  text-slate-50  ">
                <button onClick={() => navigate('/signup')} className=" md:basis-1/2 my-2 p-4  md:mr-4 py-2 hover:bg-blue-600 font-bold    rounded-md lg:py-4 lg:text-2xl font-regular text-slate50 bg-blue-500" >Get Started</button>
                <button className=" md:basis-1/2 my-2 p-4  md:ml-4 py-2 border-2 hover:border-blue-600 border-slate-50  lg:py-4 rounded-md font-semibold lg:text-2xl " >Login</button>

            </div>
        </div>
    )
}

export default Home