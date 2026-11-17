import { cn } from "@/lib/utils"

export function BrandMark({ className, label = false }: { className?: string; label?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-10 w-10 shrink-0", className)}>
        <rect x="1" y="1" width="46" height="46" rx="14" fill="#d7b77e" />
        <path d="M10 12v12c0 8.5 14 8.5 14 0V12M22 35l8-23 8 23M25 27h10" fill="none" stroke="#171816" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
      </svg>
      {label && <span className="flex flex-col leading-none"><span className="text-sm font-semibold tracking-tight">Uzair Ansari</span><span className="mt-1.5 text-[9px] font-medium uppercase tracking-[.16em] opacity-55">Software · GenAI</span></span>}
    </span>
  )
}
