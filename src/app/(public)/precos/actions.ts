'use server';

import { suggestPricingTier, SuggestPricingTierInput } from '@/ai/flows/suggest-pricing-tier';
import { z } from 'zod';

const formSchema = z.object({
  documentCount: z.coerce.number().min(1),
  teamSize: z.coerce.number().min(1),
  features: z.array(z.string()).optional(),
});

type State = {
  data: {
    suggestedTier: string;
    reasoning: string;
  } | null;
  error: string | null;
};

export async function suggestPricingTierAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    documentCount: formData.get('documentCount'),
    teamSize: formData.get('teamSize'),
    features: formData.getAll('features'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: 'Dados inválidos. Por favor, verifique os campos.',
    };
  }

  const { documentCount, teamSize, features } = validatedFields.data;

  const input: SuggestPricingTierInput = {
    documentCount,
    teamSize,
    requiredFeatures: features?.join(', ') || 'Nenhum recurso específico',
  };

  try {
    const result = await suggestPricingTier(input);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Ocorreu um erro ao processar sua solicitação. Tente novamente.' };
  }
}
