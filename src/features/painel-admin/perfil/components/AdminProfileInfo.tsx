'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AdminProfile } from "../../types";

type AdminProfileInfoProps = {
    profile: AdminProfile;
};

export function AdminProfileInfo({ profile }: AdminProfileInfoProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>Gerencie suas informações de identificação.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue={profile.name} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={profile.email} readOnly disabled />
                </div>
                <div className="flex justify-end">
                    <Button>Salvar Alterações</Button>
                </div>
            </CardContent>
        </Card>
    );
}
