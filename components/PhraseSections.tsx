import type { PhraseSection } from "@/data/phrases";
import AdSlot from "@/components/AdSlot";

type Props = {
  sections: PhraseSection[];
  /** 이 인덱스 뒤에 인아티클 광고를 넣습니다 */
  adAfter?: number[];
};

export default function PhraseSections({ sections, adAfter = [1] }: Props) {
  return (
    <>
      {sections.map((section, i) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            <span aria-hidden="true">{section.icon}</span> {section.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{section.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {section.phrases.map((phrase) => (
              <div key={phrase.chinese} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-lg font-bold text-gray-800 mb-1 leading-snug">{phrase.chinese}</p>
                <p className="text-sm text-red-600 mb-1">{phrase.pinyin}</p>
                <p className="text-sm text-gray-600">{phrase.meaning}</p>
              </div>
            ))}
          </div>
          {adAfter.includes(i) && <AdSlot type="inArticle" className="mt-8" />}
        </section>
      ))}
    </>
  );
}
