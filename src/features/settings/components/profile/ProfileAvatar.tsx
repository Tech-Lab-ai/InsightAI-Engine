'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function ProfileAvatar() {
    return (
        <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
                <AvatarImage src="https://picsum.photos/seed/user/200" alt="Avatar do usuário" />
                <AvatarFallback>
                    <User className="h-10 w-10" />
                </AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
                <Button variant="outline" type="button">Alterar Foto</Button>
                <Button variant="ghost" type="button">Remover</Button>
            </div>
        </div>
    );
}
