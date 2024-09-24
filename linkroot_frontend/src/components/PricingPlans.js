import React from 'react';

const plans = [
  {
    name: "Free",
    description: "For personal use or testing your app before deploying to customers.",
    price: "Free",
    features: [
      { name: "Feature 1", included: true },
      { name: "Feature 2", included: true },
      { name: "Feature 3", included: false },
      { name: "Feature 4", included: false },
    ],
  },
  {
    name: "Essential",
    description: "For simple desktop apps.",
    price: "$99/month",
    features: [
      { name: "Feature 1", included: true },
      { name: "Feature 2", included: true },
      { name: "Feature 3", included: false },
      { name: "Feature 4", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For sophisticated desktop apps.",
    price: "$199/month",
    features: [
      { name: "Feature 1", included: true },
      { name: "Feature 2", included: true },
      { name: "Feature 3", included: true },
      { name: "Feature 4", included: true },
    ],
    popular: true,
  },
];

function PricingPlans() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-2">Choose a plan that fits</h2>
      <h3 className="text-4xl font-bold mb-12">your needs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg border ${
              plan.popular ? 'border-indigo-500' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-indigo-500 text-white px-2 py-1 rounded">
                Most Popular
              </div>
            )}
            <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold mb-4">
              {plan.price ? plan.price : 'Free'}
            </p>
            <h5 className="font-semibold mb-2">KEY FEATURES</h5>
            <ul className="mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  {feature.included ? (
                    <span className="text-green-500 mr-2">✔</span>
                  ) : (
                    <span className="text-gray-300 mr-2">✘</span>
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-lg ${
                plan.popular ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Read Docs
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
