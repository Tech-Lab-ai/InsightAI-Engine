import * as React from 'react';
import { Suspense } from 'react';
import { CheckoutLoading } from '@/features/billing/components/checkout/CheckoutLoading';
import CheckoutPageContent from '@/features/billing/components/checkout/CheckoutPageContent';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutPageContent />
    </Suspense>
  );
}
