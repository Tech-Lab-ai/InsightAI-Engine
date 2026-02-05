'use client';
import * as React from 'react';
import { SettingsHeader } from "@/features/settings/components/SettingsHeader";
import { SettingsGrid } from "@/features/settings/components/SettingsGrid";
import { SettingsLoading } from "@/features/settings/components/SettingsLoading";

export default function SettingsPage() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-8">
            <SettingsHeader />
            {isLoading ? <SettingsLoading /> : <SettingsGrid />}
        </div>
    );
}
