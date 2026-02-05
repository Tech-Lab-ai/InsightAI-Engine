import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="60" fill="hsl(var(--primary))" />
        <path
          d="M128 64C93.8778 64 64 93.8778 64 128C64 162.122 93.8778 192 128 192"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128 128H192V192"
          stroke="hsl(var(--accent))"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold text-primary">InsightAI</span>
    </div>
  );
}
