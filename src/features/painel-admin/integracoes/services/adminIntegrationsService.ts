import {
    Slack, GitBranch, Puzzle, Briefcase, Bot, Code, BarChart, DollarSign, Database, GitCommit, CheckSquare
} from 'lucide-react';
import { GlobalIntegration, IntegrationsOverview } from '../types';

const mockIntegrations: GlobalIntegration[] = [
    // Comunicação
    { id: 'slack', name: 'Slack', icon: Slack, category: 'Comunicação', description: 'Notificações para canais do Slack.', status: 'Ativa', availablePlans: ['Starter', 'Pro', 'Enterprise'], lastUpdated: '15/07/2024' },
    { id: 'teams', name: 'Microsoft Teams', icon: Briefcase, category: 'Comunicação', description: 'Notificações para equipes no Microsoft Teams.', status: 'Simulada', availablePlans: ['Pro', 'Enterprise'], lastUpdated: '10/07/2024' },
    // Gestão & Projetos
    { id: 'jira', name: 'Jira', icon: GitBranch, category: 'Gestão & Projetos', description: 'Crie e atualize issues no Jira.', status: 'Ativa', availablePlans: ['Pro', 'Enterprise'], lastUpdated: '20/07/2024' },
    { id: 'asana', name: 'Asana', icon: CheckSquare, category: 'Gestão & Projetos', description: 'Coordene tarefas e projetos no Asana.', status: 'Desativada', availablePlans: ['Enterprise'], lastUpdated: '01/06/2024' },
    // Desenvolvimento
    { id: 'github', name: 'GitHub', icon: Code, category: 'Desenvolvimento', description: 'Conecte com repositórios e actions do GitHub.', status: 'Ativa', availablePlans: ['Starter', 'Pro', 'Enterprise'], lastUpdated: '25/07/2024' },
    // ERP / Financeiro
    { id: 'omie', name: 'Omie', icon: DollarSign, category: 'ERP / Financeiro', description: 'Gerencie finanças com o Omie.', status: 'Roadmap', availablePlans: ['Enterprise'], lastUpdated: 'N/A' },
    // Automação
    { id: 'zapier', name: 'Zapier', icon: Puzzle, category: 'Automação', description: 'Conecte com milhares de apps via Zapier.', status: 'Ativa', availablePlans: ['Básico', 'Starter', 'Pro', 'Enterprise'], lastUpdated: '18/07/2024' },
];


export const getGlobalIntegrations = async (): Promise<GlobalIntegration[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockIntegrations), 1000));
};

export const getIntegrationsOverview = async (): Promise<IntegrationsOverview> => {
    const overview: IntegrationsOverview = {
        active: mockIntegrations.filter(i => i.status === 'Ativa').length,
        simulated: mockIntegrations.filter(i => i.status === 'Simulada').length,
        disabled: mockIntegrations.filter(i => i.status === 'Desativada').length,
        roadmap: mockIntegrations.filter(i => i.status === 'Roadmap').length,
        total: mockIntegrations.length,
    };
    return new Promise(resolve => setTimeout(() => resolve(overview), 500));
}
