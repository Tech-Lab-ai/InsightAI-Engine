import { LucideIcon } from 'lucide-react';

export type IntegrationStatus = 'Ativa' | 'Simulada' | 'Desativada' | 'Roadmap';
export type PlanTier = 'Básico' | 'Starter' | 'Pro' | 'Enterprise';

export interface GlobalIntegration {
  id: string;
  name: string;
  icon: LucideIcon;
  category: 'Comunicação' | 'Gestão & Projetos' | 'Desenvolvimento' | 'Dados & BI' | 'ERP / Financeiro' | 'Automação';
  description: string;
  status: IntegrationStatus;
  availablePlans: PlanTier[];
  lastUpdated: string;
}

export interface IntegrationsOverview {
  active: number;
  simulated: number;
  disabled: number;
  roadmap: number;
  total: number;
}
