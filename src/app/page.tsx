import Header from "../app/components/Header";
import Sidebar from "../app/components/Sidebar";
import ColumnSection from "../app/components/Column";
import { COLUMNS } from "../app/data/column"

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-[1400px] mx-auto p-6 sm:p-10">
        <Header />

        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1 overflow-x-auto">
            <div className="flex gap-6 w-max pr-6">
              {COLUMNS.map((col) => (
                <ColumnSection key={col.id} col={col} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
