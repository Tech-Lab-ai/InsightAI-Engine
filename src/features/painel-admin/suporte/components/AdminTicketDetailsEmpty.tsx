import { Card, CardContent } from "@/components/ui/card";
import { Ticket } from 'lucide-react';

export function AdminTicketDetailsEmpty() {
    return (
        <Card className="h-full flex items-center justify-center">
            <CardContent className="text-center text-muted-foreground">
                <Ticket className="mx-auto h-12 w-12 mb-4" />
                <p>Selecione um ticket da lista para ver os detalhes.</p>
            </CardContent>
        </Card>
    );
}
