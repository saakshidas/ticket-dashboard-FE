export default function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">C</div>
        <div>
          <h1 className="text-lg font-semibold">Cognito</h1>
          <p className="text-sm text-black/60">Project Board</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/60 border border-gray-200 text-sm">
          Filter
        </button>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-foreground text-background text-sm font-medium">
          + New Project
        </button>
      </div>
    </header>
  );
}
