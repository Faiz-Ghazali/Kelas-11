export default function Category() {
    const items = [
        'All', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'
    ]

    return (
        <div className="bg-neutral-800 py-3 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="overflow-x-auto">
                    <div className="inline-flex gap-3 items-center">
                        {items.map((t, i) => (
                            <button key={i} className={`whitespace-nowrap px-4 py-2 rounded-full ${i===0 ? 'bg-white text-black' : 'bg-neutral-700 text-neutral-200'} border border-neutral-700` }>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}