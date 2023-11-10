import Image from 'next/image';
import PricingCard from '../components/PricingCard';

const plans = [
  {
    name: 'Basic',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    price: '$10/month',
  },
  {
    name: 'Pro',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    price: '$20/month',
  },
  {
    name: 'Enterprise',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    price: 'Contact Us',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  );
}