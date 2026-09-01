import type { PinyinItem } from "@/data/pinyin";

export default function PinyinGrid({ items }: { items: PinyinItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((item) => (
        <div
          key={item.sound}
          className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md hover:border-red-300 transition-all"
        >
          <p className="text-2xl font-bold text-red-600 mb-1">{item.sound}</p>
          <p className="text-xs text-gray-500 mb-2">{item.korean}</p>
          <p className="text-base font-semibold text-gray-800 leading-tight">{item.example}</p>
          <p className="text-xs text-amber-600">{item.pinyin}</p>
          <p className="text-xs text-gray-400">{item.meaning}</p>
        </div>
      ))}
    </div>
  );
}
