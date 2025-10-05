import { Card } from "../data/column";

export default function CardItem({ card }: { card: Card }) {
  return (
    <article
      className="group bg-white/70 border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium">{card.title}</h3>
          {card.meta && <div className="text-xs text-gray-500 mt-1">{card.meta}</div>}
        </div>
        <div className="text-xs text-gray-400">•••</div>
      </div>

      {card.lines && (
        <ul className="mt-3 text-xs text-gray-600 space-y-1">
          {card.lines.map((l, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
