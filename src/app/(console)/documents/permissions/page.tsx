'use client';
import * as React from 'react';
import { DocumentPermissionsHeader } from '@/features/documents/components/permissions/DocumentPermissionsHeader';
import { DocumentPermissionsContextSelector } from '@/features/documents/components/permissions/DocumentPermissionsContextSelector';
import { DocumentPermissionsMatrix } from '@/features/documents/components/permissions/DocumentPermissionsMatrix';
import { DocumentPermissionsLoading } from '@/features/documents/components/permissions/DocumentPermissionsLoading';

export default function DocumentPermissionsPage() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-8">
            <DocumentPermissionsHeader />
            {isLoading ? (
                <DocumentPermissionsLoading />
            ) : (
                <div className="space-y-4">
                    <DocumentPermissionsContextSelector />
                    <DocumentPermissionsMatrix />
                </div>
            )}
        </div>
    );
}
