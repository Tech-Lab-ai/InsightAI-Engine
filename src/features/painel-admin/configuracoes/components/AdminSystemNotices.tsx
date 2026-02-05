'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Megaphone, Wrench } from 'lucide-react';
import { SystemNotice } from '../../types';

type AdminSystemNoticesProps = {
    notices: SystemNotice[];
};

const typeMap: Record<SystemNotice['type'], { text: string; icon: React.ElementType, className: string }> = {
    'MAINTENANCE': { text: "Manutenção", icon: Wrench, className: 'bg-amber-500/10 text-amber-700 border-amber-500/50' },
    'ANNOUNCEMENT': { text: "Aviso", icon: Megaphone, className: 'bg-blue-500/10 text-blue-700 border-blue-500/50' },
};

export function AdminSystemNotices({ notices }: AdminSystemNoticesProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Avisos & Manutenção</CardTitle>
                <CardDescription>Gerencie avisos globais e agende manutenções.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Criar novo aviso</label>
                    <Input placeholder="Digite a mensagem do aviso..." />
                    <Button size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Publicar Aviso
                    </Button>
                </div>
                 <div className="space-y-2">
                    <h4 className="text-sm font-medium">Avisos Ativos</h4>
                    {notices.length > 0 ? (
                        notices.map(notice => {
                            const type = typeMap[notice.type];
                             return (
                                <div key={notice.id} className="border p-3 rounded-lg text-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="outline" className={type.className}>
                                            <type.icon className="mr-2 h-3 w-3" />
                                            {type.text}
                                        </Badge>
                                         <span className="text-xs text-muted-foreground">{notice.date}</span>
                                    </div>
                                    <p>{notice.message}</p>
                                </div>
                            )
                        })
                    ) : (
                        <p className="text-sm text-muted-foreground text-center py-4">Nenhum aviso ativo.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
