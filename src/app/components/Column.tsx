import { Column } from "../data/column";
import CardItem from "./CardItem";

export default function ColumnSection({ col }: { col: Column }) {
  return (
    <section className="w-72 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold">{col.title}</h2>
        <span className={`inline-block w-3 h-3 rounded ${col.color}`}></span>
      </div>

      <div className="space-y-3">
        {col.cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
        <button className="w-full text-sm text-center text-gray-500 py-2 rounded hover:bg-gray-50">+ New</button>
      </div>
    </section>
  );
}
