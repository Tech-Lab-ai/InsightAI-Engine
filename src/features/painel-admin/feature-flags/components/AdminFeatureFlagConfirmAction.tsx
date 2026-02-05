'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type ConfirmActionProps = {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
};

export function AdminFeatureFlagConfirmAction({ children, title, description, variant = 'default' }: ConfirmActionProps) {
  const { toast } = useToast();

  const handleConfirm = () => {
    toast({
        title: "Ação Realizada (Simulação)",
        description: `A ação "${title}" foi confirmada visualmente.`,
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} className={cn(buttonVariants({ variant }))}>Confirmar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
