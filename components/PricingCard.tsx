import React from 'react';

interface Plan {
  name: string;
  features: string[];
  price: string;
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
      <ul className="mt-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-3xl font-bold text-gray-900">{plan.price}</p>
      <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
        Sign Up
      </button>
    </div>
  );
};

export default PricingCard;