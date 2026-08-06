export default function Navbar() {
    return (
        <nav className="bg-neutral-900 text-white px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-red-600 rounded flex items-center justify-center h-8 w-8">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.2 4.8C2.9 5.6 2.8 7.7 2.8 12s.1 6.4.4 7.2c.3.9 1.1 1.6 2 1.9C8 21.6 12 22 12 22s4-.4 6.8-0.9c.9-.3 1.7-1 2-1.9.3-.8.4-3 .4-7.2s-.1-6.4-.4-7.2c-.3-.9-1.1-1.6-2-1.9C16 2.4 12 2 12 2s-4 .4-6.8.9c-.9.3-1.7 1-2 1.9zM10 15.5V8.5l5 3.5-5 3.5z" />
                            </svg>
                        </div>
                        <span className="font-semibold hidden sm:inline">YouTube</span>
                    </a>
                </div>

                <div className="flex-1 max-w-xl mx-4 hidden sm:flex items-center">
                    <div className="flex flex-1 items-center border border-neutral-700 rounded-l-full rounded-r-full overflow-hidden">
                        <input
                            className="flex-1 bg-neutral-900 px-4 py-2 outline-none"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="bg-neutral-800 px-4 py-2 hover:bg-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                            </svg>
                        </button>
                    </div>
                    <button className="ml-2 p-2 rounded-full hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v11m0 0l3-3m-3 3l-3-3" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-neutral-800 hidden sm:inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0 1 22 9.618V14.38a2 2 0 0 1-2.447 1.894L15 14M4 6h8v12H4z" />
                        </svg>
                    </button>

                    <button className="p-2 rounded-full hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <button className="p-2 rounded-full hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" />
                        </svg>
                    </button>

                    <div className="h-8 w-8 rounded-full bg-neutral-700 flex items-center justify-center text-sm">F</div>
                </div>
            </div>
        </nav>
    )
}