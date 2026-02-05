'use server';

/**
 * @fileOverview An AI agent that suggests the most suitable pricing tier based on the user's needs.
 *
 * - suggestPricingTier - A function that handles the pricing tier suggestion process.
 * - SuggestPricingTierInput - The input type for the suggestPricingTier function.
 * - SuggestPricingTierOutput - The return type for the suggestPricingTier function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPricingTierInputSchema = z.object({
  documentCount: z.number().describe('The estimated number of documents to be processed per month.'),
  teamSize: z.number().describe('The size of the team that will be using the platform.'),
  requiredFeatures: z
    .string()
    .describe(
      'A comma-separated list of required features, such as chat-based document processing, specialized agents, intelligent workflows, audit and governance.'
    ),
});
export type SuggestPricingTierInput = z.infer<typeof SuggestPricingTierInputSchema>;

const SuggestPricingTierOutputSchema = z.object({
  suggestedTier: z
    .enum(['Starter', 'Business', 'Enterprise'])
    .describe('The suggested pricing tier based on the user input.'),
  reasoning: z.string().describe('The reasoning behind the suggested pricing tier.'),
});
export type SuggestPricingTierOutput = z.infer<typeof SuggestPricingTierOutputSchema>;

export async function suggestPricingTier(
  input: SuggestPricingTierInput
): Promise<SuggestPricingTierOutput> {
  return suggestPricingTierFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPricingTierPrompt',
  input: {schema: SuggestPricingTierInputSchema},
  output: {schema: SuggestPricingTierOutputSchema},
  prompt: `You are an AI assistant that helps prospective customers choose the most suitable pricing tier (Starter, Business, or Enterprise) for the InsightAI platform.

  Based on the following information about the customer's needs, suggest a pricing tier and explain your reasoning.

  Number of documents to be processed per month: {{{documentCount}}}
  Team size: {{{teamSize}}}
  Required features: {{{requiredFeatures}}}

  Consider the following:

  - Starter: Suitable for individuals or small teams with basic document processing needs.
  - Business: Suitable for growing businesses with moderate document processing needs and a need for more advanced features.
  - Enterprise: Suitable for large organizations with complex document processing needs, advanced security requirements, and a need for audit and governance features.

  Respond with the suggested tier and a concise explanation of why that tier is the most suitable.

  {{output}}
  `,
});

const suggestPricingTierFlow = ai.defineFlow(
  {
    name: 'suggestPricingTierFlow',
    inputSchema: SuggestPricingTierInputSchema,
    outputSchema: SuggestPricingTierOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
