'use client';
import * as React from 'react';
import { AdminSecurityHeader } from '@/features/painel-admin/seguranca/components/AdminSecurityHeader';
import { AdminSecurityOverview } from '@/features/painel-admin/seguranca/components/AdminSecurityOverview';
import { AdminSecurityControls } from '@/features/painel-admin/seguranca/components/AdminSecurityControls';
import { AdminComplianceStatus } from '@/features/painel-admin/seguranca/components/AdminComplianceStatus';
import { AdminAuditSection } from '@/features/painel-admin/seguranca/components/AdminAuditSection';
import { AdminPoliciesList } from '@/features/painel-admin/seguranca/components/AdminPoliciesList';
import { AdminSecurityLoading } from '@/features/painel-admin/seguranca/components/AdminSecurityLoading';
import { getSecurityPosture, getComplianceStatus, getPolicies } from '@/features/painel-admin/seguranca/services/securityService';
import { SecurityPosture, ComplianceStatus, PolicyDocument } from '@/features/painel-admin/seguranca/types';

export default function AdminSecurityPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [posture, setPosture] = React.useState<SecurityPosture | null>(null);
    const [compliance, setCompliance] = React.useState<ComplianceStatus | null>(null);
    const [policies, setPolicies] = React.useState<PolicyDocument[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [postureData, complianceData, policiesData] = await Promise.all([
                    getSecurityPosture(),
                    getComplianceStatus(),
                    getPolicies(),
                ]);
                setPosture(postureData);
                setCompliance(complianceData);
                setPolicies(policiesData);
            } catch (error) {
                console.error("Failed to fetch security data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminSecurityLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminSecurityHeader status={posture?.overallStatus || 'Estável'} />
            {posture && <AdminSecurityOverview posture={posture} />}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AdminSecurityControls />
                {compliance && <AdminComplianceStatus status={compliance} />}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AdminAuditSection />
                <AdminPoliciesList policies={policies} />
            </div>
        </div>
    );
}
