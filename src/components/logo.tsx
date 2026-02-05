import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/insigt ai.png"
        alt="InsightAI logo"
        width={32}
        height={32}
      />
      <span className="text-xl font-bold text-primary">InsightAI</span>
    </div>
  );
}
