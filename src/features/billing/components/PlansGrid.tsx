import { getPlans } from '../services/planService';
import { PlanCard } from './PlanCard';

export function PlansGrid() {
    const plans = getPlans();
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">Escolha o plano ideal para você</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    );
}
