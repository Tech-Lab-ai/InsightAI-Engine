import { Slack, GitBranch, Puzzle, Briefcase, Bot, Code, BarChart, DollarSign, Database, GitCommit, CheckSquare } from 'lucide-react';

export type Integration = {
    name: string;
    description: string;
    icon: React.ElementType;
};

const communicationIntegrations: Integration[] = [
    { name: 'Slack', description: 'Envie notificações para canais do Slack.', icon: Slack },
    { name: 'Microsoft Teams', description: 'Notifique equipes no Microsoft Teams.', icon: Briefcase },
    { name: 'Discord', description: 'Comunique-se com comunidades no Discord.', icon: Bot },
];

const projectManagementIntegrations: Integration[] = [
    { name: 'Jira', description: 'Crie e atualize issues no Jira.', icon: GitBranch },
    { name: 'Trello', description: 'Gerencie cards e quadros no Trello.', icon: CheckSquare },
    { name: 'Asana', description: 'Coordene tarefas e projetos no Asana.', icon: CheckSquare },
    { name: 'ClickUp', description: 'Centralize o trabalho da sua equipe no ClickUp.', icon: CheckSquare },
];

const developmentIntegrations: Integration[] = [
    { name: 'GitHub', description: 'Conecte com repositórios e actions do GitHub.', icon: Code },
    { name: 'GitLab', description: 'Gerencie seu ciclo de vida de DevOps no GitLab.', icon: GitCommit },
    { name: 'Bitbucket', description: 'Colabore em código com o Bitbucket.', icon: GitCommit },
];

const dataBiIntegrations: Integration[] = [
    { name: 'Google BigQuery', description: 'Analise grandes volumes de dados.', icon: Database },
    { name: 'Snowflake', description: 'Acesse seu data cloud da Snowflake.', icon: Database },
    { name: 'Looker', description: 'Explore e visualize seus dados.', icon: BarChart },
    { name: 'Power BI', description: 'Crie dashboards interativos.', icon: BarChart },
];

const erpFinanceIntegrations: Integration[] = [
    { name: 'SAP', description: 'Integre com seu sistema SAP ERP.', icon: Briefcase },
    { name: 'Oracle NetSuite', description: 'Conecte com o ERP da Oracle NetSuite.', icon: Briefcase },
    { name: 'TOTVS', description: 'Sincronize com sistemas TOTVS.', icon: Briefcase },
    { name: 'Omie', description: 'Gerencie finanças com o Omie.', icon: DollarSign },
    { name: 'Conta Azul', description: 'Automatize sua gestão financeira.', icon: DollarSign },
];

const automationIntegrations: Integration[] = [
    { name: 'Zapier', description: 'Conecte com milhares de apps via Zapier.', icon: Puzzle },
    { name: 'Make (Integromat)', description: 'Crie automações complexas com o Make.', icon: Puzzle },
    { name: 'n8n', description: 'Automatize workflows com a plataforma n8n.', icon: Puzzle },
];

export const integrationsByCategory = [
    { title: 'Comunicação', integrations: communicationIntegrations },
    { title: 'Gestão & Projetos', integrations: projectManagementIntegrations },
    { title: 'Desenvolvimento', integrations: developmentIntegrations },
    { title: 'Dados & BI', integrations: dataBiIntegrations },
    { title: 'ERP / Financeiro', integrations: erpFinanceIntegrations },
    { title: 'Automação', integrations: automationIntegrations },
];
