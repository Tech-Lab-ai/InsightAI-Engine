'use client';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ActivityLogItem } from "./ActivityLogItem";
import { getMockActivities, Activity } from '../../services/activityService';

export function ActivityLogs() {
    const [activities, setActivities] = React.useState<Activity[]>([]);

    React.useEffect(() => {
        setActivities(getMockActivities());
    }, []);

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Logs de Atividade Recente</CardTitle>
                <CardDescription>
                    Um resumo das últimas ações realizadas na plataforma.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
                {activities.map((activity, index) => (
                    <ActivityLogItem key={index} activity={activity} />
                ))}
            </CardContent>
            <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                    <Link href="/reports/audit">
                        Ver todos os logs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
