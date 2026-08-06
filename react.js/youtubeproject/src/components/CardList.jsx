export default function CardList() {
    const cards = new Array(8).fill(0)

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cards.map((_, i) => (
                    <div key={i} className="">
                        <div className="aspect-video bg-neutral-700 rounded-lg overflow-hidden flex items-center justify-center">
                            <div className="w-full h-full bg-linear-to-br from-neutral-700 to-neutral-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-300 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 8.5v7l6-3.5-6-3.5z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mt-3">
                            <div className="h-10 w-10 rounded-full bg-neutral-700 shrink-0"></div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                                <p className="text-xs text-neutral-400 mt-1">Channel Name • 1.2M views • 2 days ago</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
