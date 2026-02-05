'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Document } from '../types/document';
import { FileText, User, Calendar, Tag, Shield } from 'lucide-react';

type DocumentDetailsPanelProps = {
  document: Document | null;
  isOpen: boolean;
  onClose: () => void;
};

export function DocumentDetailsPanel({ document, isOpen, onClose }: DocumentDetailsPanelProps) {
  if (!document) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-start gap-2">
             <FileText className="h-5 w-5 mt-1" /> 
             {document.name}
          </SheetTitle>
          <SheetDescription>
            Detalhes, metadados e histórico do documento.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-4">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><User className="h-4 w-4" /> Proprietário</p>
                <p>{document.owner}</p>
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Calendar className="h-4 w-4" /> Última Modificação</p>
                <p>{document.modified}</p>
            </div>
             <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Tag className="h-4 w-4" /> Categoria</p>
                <p><Badge variant="outline">{document.category}</Badge></p>
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Shield className="h-4 w-4" /> Status</p>
                <p><Badge>{document.status}</Badge></p>
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Conteúdo</p>
                <div className="border rounded-md p-4 h-48 overflow-y-auto bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                        Pré-visualização do conteúdo do documento é apenas ilustrativa... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </div>
            </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
