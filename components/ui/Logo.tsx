export function Logo({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="text-[13px] font-bold uppercase tracking-[0.28em] text-white">
        It&apos;s All
      </span>
      <span
        className={`mt-1 font-black uppercase tracking-[-0.08em] text-[#0D73C8] ${
          compact ? "text-3xl" : "text-5xl"
        }`}
      >
        Greek
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.42em] text-white">
        Food & Drinks
      </span>
    </span>
  );
}
