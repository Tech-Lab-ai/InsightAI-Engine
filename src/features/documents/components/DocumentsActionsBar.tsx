'use client';
import { Button } from "@/components/ui/button";
import { Upload, FolderPlus, Trash2, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

export function DocumentsActionsBar() {
  const router = useRouter();
  
  return (
    <div className="flex items-center gap-2 pb-4 border-b">
        <Button variant="outline" size="sm" onClick={() => router.push('/documents/upload')}>
            <Upload className="mr-2 h-4 w-4" />
            Upload
        </Button>
        <Button variant="outline" size="sm">
            <FolderPlus className="mr-2 h-4 w-4" />
            Criar Pasta
        </Button>
        <div className="border-l h-6 mx-2"></div>
        <Button variant="ghost" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir
        </Button>
         <Button variant="ghost" size="sm">
            <MoreVertical className="mr-2 h-4 w-4" />
            Mais Ações
        </Button>
    </div>
  );
}
