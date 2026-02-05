import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/insigt ai.png"
        alt="InsightAI logo"
        width={32}
        height={32}
      />
    </div>
  );
}
