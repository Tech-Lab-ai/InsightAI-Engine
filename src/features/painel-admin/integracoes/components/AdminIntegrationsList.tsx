import { AdminIntegrationCard } from './AdminIntegrationCard';
import { GlobalIntegration } from '../../types';

type AdminIntegrationsListProps = {
    integrations: GlobalIntegration[];
}

export function AdminIntegrationsList({ integrations }: AdminIntegrationsListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map(integration => (
                <AdminIntegrationCard key={integration.id} integration={integration} />
            ))}
        </div>
    );
}
