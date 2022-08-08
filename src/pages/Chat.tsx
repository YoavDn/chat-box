
const Chat = () => {
    return (
        <div className="chat-page bg-gradient-to-b from-sky-900 to-zinc-300  px-4">
            <section className=" main-container flex">
                <div className="sidebar rounded-md border-2 border-zinc-300">
                    <h2>sidebar</h2>
                </div>
                <main className="main-chat-container px-2">
                    <div className="msgs-container border-zinc-300  border-2  rounded-md ">
                        <h2 className="text-slate-50 text-center ">test</h2>
                    </div>
                    <form className="chat-input flex pt-4">
                        <input className=" bg-transparent border-2 text-zinc-900 text-xl border-sky-700 rounded-md" type="text" />
                        <button className="text-sky-700 text- rounded-md font-bold border-2 border-sky-700">Sand</button>
                    </form>
                </main>
            </section>
        </div>
    )
}

export default Chat