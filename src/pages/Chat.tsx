
const Chat = () => {
    return (
        <div className="chat-page bg-gradient-to-b from-sky-900 to-zinc-300  px-4">
            <section className=" main-container flex">
                <div className="sidebar rounded-md ">
                    <h2>sidebar</h2>
                </div>
                <main className="main-chat-container px-2">
                    <div className="msgs-container   rounded-md ">
                        <h2 className="text-slate-50 text-center ">test</h2>
                    </div>
                    <form className="chat-input flex pt-4">
                        <input className=" bg-transparent border-2 text-zinc-900 text-xl border-zinc-600 rounded-md" type="text" />
                        <button className="text-slate-50 text- rounded-md font-bold bg-blue-500">Sand</button>
                    </form>
                </main>
            </section>
        </div>
    )
}

export default Chat