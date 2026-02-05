'use client'
import * as React from 'react';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadCloud, File, X, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Status = 'idle' | 'selected' | 'uploading' | 'complete';

export default function UploadDocumentPage() {
    const [status, setStatus] = React.useState<Status>('idle');
    const [fileName, setFileName] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    const handleFileSelect = () => {
        // Simulação da seleção de arquivo
        setFileName('Contrato_NDA_v2.pdf');
        setStatus('selected');
    };

    const handleUpload = () => {
        setStatus('uploading');
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus('complete');
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };

    const handleReset = () => {
        setStatus('idle');
        setFileName('');
        setProgress(0);
    };

    const renderContent = () => {
        switch (status) {
            case 'idle':
                return (
                    <div className="text-center p-8 border-2 border-dashed rounded-lg flex flex-col items-center justify-center h-64">
                        <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-semibold">Arraste e solte o arquivo aqui</h3>
                        <p className="text-muted-foreground mb-4">ou</p>
                        <Button type="button" variant="outline" onClick={handleFileSelect}>Selecionar Arquivo</Button>
                        <p className="text-xs text-muted-foreground mt-4">Suporta: PDF, DOCX, TXT, CSV (máx 50MB)</p>
                    </div>
                );
            case 'selected':
                return (
                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <File className="h-8 w-8 text-primary" />
                                <span className="font-medium">{fileName}</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={handleReset}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                );
            case 'uploading':
            case 'complete':
                return (
                    <div className="p-4 border rounded-lg">
                         <div className="flex items-center gap-3">
                            <File className="h-8 w-8 text-primary" />
                            <div>
                                <p className="font-medium">{fileName}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Progress value={progress} className="w-48" />
                                    <span className="text-sm font-mono">{progress}%</span>
                                    {status === 'uploading' && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    }


    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Upload de Documento</PageHeaderTitle>
                <PageHeaderDescription>Adicione um novo documento para ser processado pelo InsightAI.</PageHeaderDescription>
            </PageHeader>
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>1. Selecione o Arquivo</CardTitle>
                    <CardDescription>Escolha o documento que você deseja enviar.</CardDescription>
                </CardHeader>
                <CardContent>
                    {renderContent()}
                </CardContent>
            </Card>

             <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>2. Adicione Metadados</CardTitle>
                    <CardDescription>Categorizar o documento ajuda a IA a encontrar a informação certa.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <label htmlFor="doc-name">Nome do Documento</label>
                        <Input id="doc-name" placeholder="Ex: Relatório Financeiro Q3 2024" disabled={status === 'idle'} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="doc-category">Categoria</label>
                        <Select disabled={status === 'idle'}>
                            <SelectTrigger id="doc-category">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="juridico">Jurídico</SelectItem>
                                <SelectItem value="financeiro">Financeiro</SelectItem>
                                <SelectItem value="tecnico">Técnico</SelectItem>
                                <SelectItem value="rh">Recursos Humanos</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="doc-description">Descrição (opcional)</label>
                        <Textarea id="doc-description" placeholder="Descreva brevemente o conteúdo do documento." disabled={status === 'idle'} />
                    </div>
                </CardContent>
            </Card>
             <div className="max-w-3xl mx-auto flex justify-end gap-2">
                <Button variant="ghost" onClick={handleReset}>Cancelar</Button>
                <Button onClick={handleUpload} disabled={status !== 'selected'}>
                    {status === 'uploading' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : 
                     status === 'complete' ? 'Enviar Outro' :
                     'Enviar Documento'
                    }
                </Button>
             </div>
        </div>
    );
}
