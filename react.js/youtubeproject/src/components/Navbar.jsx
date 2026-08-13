export default function Navbar() {
    return (
        <nav className="bg-neutral-900 text-white px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">
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
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl hidden sm:flex items-center">
                    <div className="flex flex-1 items-center border border-neutral-700 rounded-full overflow-hidden">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-neutral-800 hidden sm:inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
                        </svg>
                    </button>

                    <button className="p-2 rounded-full hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                    </button>

                    <div className="h-8 w-8 rounded-full bg-neutral-700 flex items-center justify-center text-sm">F</div>
                </div>
            </div>
        </nav>
    )
}