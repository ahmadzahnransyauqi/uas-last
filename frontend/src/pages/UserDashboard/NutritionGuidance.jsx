import { Apple, Flame, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function NutritionGuidance() {
  const [dailyGoals] = useState({
    calories: { current: 1850, target: 2200 },
    protein: { current: 145, target: 165 },
    carbs: { current: 210, target: 250 },
    fats: { current: 55, target: 70 }
  });

  const mealPlans = [
    {
      id: 1,
      name: 'Muscle Gain Plan',
      calories: '2800 cal/day',
      description: 'High protein, balanced macros for muscle building',
      meals: 5
    },
    {
      id: 2,
      name: 'Weight Loss Plan',
      calories: '1800 cal/day',
      description: 'Calorie deficit with optimal nutrition',
      meals: 4
    },
    {
      id: 3,
      name: 'Maintenance Plan',
      calories: '2200 cal/day',
      description: 'Balanced nutrition for sustaining current weight',
      meals: 4
    },
    {
      id: 4,
      name: 'Athletic Performance',
      calories: '3000 cal/day',
      description: 'Fuel for peak athletic performance',
      meals: 6
    }
  ];

  const calculatePercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 style={{ color: '#ffffff' }}>Nutrition Guidance</h2>
        <p style={{ color: '#9CA3AF' }}>Track your nutrition and explore personalized meal plans</p>
      </div>

      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
        <h3 className="mb-6" style={{ color: '#ffffff' }}>Today's Nutrition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Flame size={20} style={{ color: '#ff1f1f' }} />
                <span style={{ color: '#9CA3AF' }}>Calories</span>
              </div>
              <span style={{ color: '#ffffff' }}>
                {dailyGoals.calories.current}/{dailyGoals.calories.target}
              </span>
            </div>
            <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#1a1a1a' }}>
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: '#ff1f1f',
                  width: `${calculatePercentage(dailyGoals.calories.current, dailyGoals.calories.target)}%`
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target size={20} style={{ color: '#ff1f1f' }} />
                <span style={{ color: '#9CA3AF' }}>Protein (g)</span>
              </div>
              <span style={{ color: '#ffffff' }}>
                {dailyGoals.protein.current}/{dailyGoals.protein.target}
              </span>
            </div>
            <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#1a1a1a' }}>
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: '#ff1f1f',
                  width: `${calculatePercentage(dailyGoals.protein.current, dailyGoals.protein.target)}%`
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Apple size={20} style={{ color: '#ff1f1f' }} />
                <span style={{ color: '#9CA3AF' }}>Carbs (g)</span>
              </div>
              <span style={{ color: '#ffffff' }}>
                {dailyGoals.carbs.current}/{dailyGoals.carbs.target}
              </span>
            </div>
            <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#1a1a1a' }}>
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: '#ff1f1f',
                  width: `${calculatePercentage(dailyGoals.carbs.current, dailyGoals.carbs.target)}%`
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} style={{ color: '#ff1f1f' }} />
                <span style={{ color: '#9CA3AF' }}>Fats (g)</span>
              </div>
              <span style={{ color: '#ffffff' }}>
                {dailyGoals.fats.current}/{dailyGoals.fats.target}
              </span>
            </div>
            <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#1a1a1a' }}>
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: '#ff1f1f',
                  width: `${calculatePercentage(dailyGoals.fats.current, dailyGoals.fats.target)}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-4" style={{ color: '#ffffff' }}>Personalized Meal Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mealPlans.map((plan) => (
          <div
            key={plan.id}
            className="p-6 rounded-lg flex flex-col"
            style={{ backgroundColor: '#252525' }}
          >
            <div className="mb-4">
              <h3 style={{ color: '#ffffff' }}>{plan.name}</h3>
              <p className="mt-1" style={{ color: '#ff1f1f' }}>{plan.calories}</p>
            </div>
            
            <p className="mb-4 flex-1" style={{ color: '#9CA3AF' }}>{plan.description}</p>
            
            <div className="flex items-center justify-between mb-4" style={{ color: '#9CA3AF' }}>
              <span>{plan.meals} meals per day</span>
            </div>

            <button
              className="w-full py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#ff1f1f',
                color: '#ffffff'
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
        <h3 className="mb-4" style={{ color: '#ffffff' }}>Consult with a Nutritionist</h3>
        <p className="mb-4" style={{ color: '#9CA3AF' }}>
          Get personalized nutrition advice from our certified nutritionists. Book a one-on-one consultation to create a custom meal plan tailored to your goals.
        </p>
        <button
          className="px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
          style={{
            backgroundColor: '#ff1f1f',
            color: '#ffffff'
          }}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}