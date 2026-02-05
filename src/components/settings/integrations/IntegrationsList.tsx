import { integrationsByCategory } from "./integrations-data";
import { IntegrationItem } from "./IntegrationItem";

export function IntegrationsList() {
    return (
        <div className="space-y-8">
            {integrationsByCategory.map((category) => (
                <div key={category.title}>
                    <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {category.integrations.map((integration) => (
                            <IntegrationItem key={integration.name} integration={integration} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
