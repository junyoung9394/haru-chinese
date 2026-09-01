import type { HskWord } from "@/data/hsk";

/**
 * 단어를 주제(category)별로 묶어 보여줍니다.
 * 낱개로 나열하는 것보다 같은 주제끼리 묶을 때 기억에 훨씬 잘 남습니다.
 */
export default function WordList({ words }: { words: HskWord[] }) {
  const groups: { category: string; items: HskWord[] }[] = [];
  for (const word of words) {
    const last = groups[groups.length - 1];
    if (last && last.category === word.category) {
      last.items.push(word);
    } else {
      groups.push({ category: word.category, items: [word] });
    }
  }

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.category}>
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-sm font-bold text-gray-700">{group.category}</h3>
            <span className="text-xs text-gray-400">{group.items.length}개</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {group.items.map((word) => (
              <div
                key={`${word.word}-${word.pinyin}`}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-red-300 transition-colors"
              >
                <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                <p className="text-sm text-red-500 font-medium mb-1">{word.pinyin}</p>
                <p className="text-sm text-gray-600">{word.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
