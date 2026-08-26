import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function AnimatedList() {
  const [parent] = useAutoAnimate();
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  const removeItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <button
        onClick={addItem}
        className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
      >
        Tambah Item
      </button>

      {/* Attach ref autoanimate ke container parent */}
      <ul ref={parent} className="space-y-2">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <span className="text-gray-800 font-medium">{item}</span>
            <button
              onClick={() => removeItem(index)}
              className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 text-sm font-medium rounded-md transition-colors"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}