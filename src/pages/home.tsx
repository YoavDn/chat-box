
const Home = () => {
    return (
        <div className="home-page flex flex-col  px-28  bg-gradient-to-b from-zinc-900 to-stone-800   ">
            <h2 className=" hero-title text-slate-50 lg:text-5xl   tracking-tight font-extrabold color text-4xl" >
                Stay <span className="underline decoration-blue-400">connected</span>  with your friends at <span className="underline  decoration-amber-400">any</span>  time and chat freely <span className="underline decoration-rose-300">without</span>  worrieing.
            </h2>
            <p className="text-zinc-300 px-24 text-xl pt-3 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quaerat officiis veritatis mollitia maiores aliquam error ab nulla aut aperiam!</p>
            <div className="home-btns flex  justify-between w-1/2   pt-12  text-slate-50  ">
                <button className=" basis-1/2 p-4  mr-4  hover:bg-blue-600 font-bold    rounded-md  text-2xl font-regular text-slate50 bg-blue-500" >Get Started</button>
                <button className=" basis-1/2 p-4  ml-4 border-2 hover:border-blue-500 border-slate-50  rounded-md font-semibold text-2xl " >Login</button>

            </div>
        </div>
    )
}

export default Home