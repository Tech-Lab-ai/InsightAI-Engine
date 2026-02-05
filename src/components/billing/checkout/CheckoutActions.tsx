'use client';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type CheckoutActionsProps = {
    onConfirm: () => void;
    onCancel: () => void;
    isProcessing: boolean;
};

export function CheckoutActions({ onConfirm, onCancel, isProcessing }: CheckoutActionsProps) {
    return (
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Button variant="outline" onClick={onCancel} disabled={isProcessing}>
                Cancelar
            </Button>
            <Button onClick={onConfirm} disabled={isProcessing}>
                {isProcessing ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processando...
                    </>
                ) : (
                    "Pagar com Asaas"
                )}
            </Button>
        </div>
    );
}
