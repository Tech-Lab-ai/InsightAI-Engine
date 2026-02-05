import { sleep, FatalError } from "workflow";

// Our workflow function defined earlier
async function createUser(email: string) {
  "use step"; 
  console.log(`Creating user with email: ${email}`);
  // Full Node.js access - database calls, APIs, etc.
  return { id: crypto.randomUUID(), email };
}
async function sendWelcomeEmail(user: { id: string; email: string; }) {
  "use step"; 
  console.log(`Sending welcome email to user: ${user.id}`);
  if (Math.random() < 0.3) {
  // By default, steps will be retried for unhandled errors
   throw new Error("Retryable!");
  }
}
async function sendOnboardingEmail(user: { id: string; email: string}) {
 "use step"; 
  if (!user.email.includes("@")) {
    // To skip retrying, throw a FatalError instead
    throw new FatalError("Invalid Email");
  }
 console.log(`Sending onboarding email to user: ${user.id}`);
}

import { Workflow } from '../types/workflow';

const mockWorkflows: Workflow[] = [
    {
        id: 'wf_001',
        name: 'Análise de Contratos Jurídicos',
        status: 'Ativo',
        lastRun: 'Hoje, às 14:30',
        nextRun: 'A cada 4 horas',
    },
    {
        id: 'wf_002',
        name: 'Relatório Financeiro Mensal',
        status: 'Agendado',
        lastRun: '01/07/2024',
        nextRun: '01/08/2024',
    },
    {
        id: 'wf_003',
        name: 'Triagem de Tickets de Suporte',
        status: 'Com erro',
        lastRun: 'Hoje, às 11:15',
        nextRun: 'A cada 15 minutos',
    },
    {
        id: 'wf_004',
        name: 'Onboarding de Novos Clientes',
        status: 'Ativo',
        lastRun: 'Ontem, às 17:00',
        nextRun: 'Em cada novo cliente',
    },
    {
        id: 'wf_005',
        name: 'Sync de Dados com ERP (legado)',
        status: 'Pausado',
        lastRun: '25/06/2024',
        nextRun: '-',
    },
];

export function getMockWorkflows(): Workflow[] {
    return mockWorkflows;
}

export async function handleUserSignup(email: string) {
 "use workflow"; 
 const user = await createUser(email);
 await sendWelcomeEmail(user);
 await sleep("5s"); // Pause for 5s - doesn't consume any resources
 await sendOnboardingEmail(user);
 console.log("Workflow is complete! Run 'npx workflow web' to inspect your run")
 return { userId: user.id, status: "onboarded" };
}