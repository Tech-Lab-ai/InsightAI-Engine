import { cn } from "@/lib/utils";

function PageHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex items-center justify-between gap-4 pb-4",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-2xl font-bold tracking-tight md:text-3xl",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}


export { PageHeader, PageHeaderTitle, PageHeaderDescription };
