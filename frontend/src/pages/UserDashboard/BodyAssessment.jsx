import { TrendingUp, TrendingDown, Activity, Heart, Zap } from 'lucide-react';
import { useState } from 'react';

export default function BodyAssessment() {
  const [assessmentData, setAssessmentData] = useState({
    weight: 165,
    bodyFat: 18.5,
    muscleMass: 125,
    bmi: 24.2,
    restingHeartRate: 62,
    vo2Max: 45
  });

  const stats = [
    {
      label: 'Weight',
      value: `${assessmentData.weight} lbs`,
      change: -2.5,
      icon: Activity,
      color: '#ff1f1f'
    },
    {
      label: 'Body Fat',
      value: `${assessmentData.bodyFat}%`,
      change: -1.2,
      icon: TrendingDown,
      color: '#10b981'
    },
    {
      label: 'Muscle Mass',
      value: `${assessmentData.muscleMass} lbs`,
      change: 3.5,
      icon: TrendingUp,
      color: '#10b981'
    },
    {
      label: 'BMI',
      value: assessmentData.bmi,
      change: -0.5,
      icon: Activity,
      color: '#ff1f1f'
    },
    {
      label: 'Resting Heart Rate',
      value: `${assessmentData.restingHeartRate} bpm`,
      change: -3,
      icon: Heart,
      color: '#10b981'
    },
    {
      label: 'VO2 Max',
      value: assessmentData.vo2Max,
      change: 2.1,
      icon: Zap,
      color: '#10b981'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 style={{ color: '#ffffff' }}>Body Assessment</h2>
        <p style={{ color: '#9CA3AF' }}>Track your progress and body composition metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-6 rounded-lg"
              style={{ backgroundColor: '#252525' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  <Icon size={24} style={{ color: stat.color }} />
                </div>
                <div className="flex items-center gap-1">
                  {stat.change > 0 ? (
                    <TrendingUp size={16} style={{ color: '#10b981' }} />
                  ) : (
                    <TrendingDown size={16} style={{ color: '#10b981' }} />
                  )}
                  <span style={{ color: '#10b981' }}>
                    {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
              <p className="mb-1" style={{ color: '#9CA3AF' }}>{stat.label}</p>
              <h3 style={{ color: '#ffffff' }}>{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <h3 className="mb-4" style={{ color: '#ffffff' }}>Schedule Assessment</h3>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            Book a comprehensive body assessment with our certified professionals
          </p>
          
          <div className="space-y-3 mb-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <p style={{ color: '#ffffff' }}>Full Body Composition Analysis</p>
              <p style={{ color: '#9CA3AF' }}>45 minutes</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <p style={{ color: '#ffffff' }}>Fitness Assessment & Goals</p>
              <p style={{ color: '#9CA3AF' }}>60 minutes</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <p style={{ color: '#ffffff' }}>Advanced Metabolic Testing</p>
              <p style={{ color: '#9CA3AF' }}>90 minutes</p>
            </div>
          </div>

          <button
            className="w-full py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#ff1f1f',
              color: '#ffffff'
            }}
          >
            Book Assessment
          </button>
        </div>

        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <h3 className="mb-4" style={{ color: '#ffffff' }}>Progress Timeline</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: '#ff1f1f' }}
              />
              <div className="flex-1">
                <p style={{ color: '#ffffff' }}>Latest Assessment</p>
                <p style={{ color: '#9CA3AF' }}>December 1, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: '#9CA3AF' }}
              />
              <div className="flex-1">
                <p style={{ color: '#ffffff' }}>Mid-Point Check</p>
                <p style={{ color: '#9CA3AF' }}>November 1, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: '#9CA3AF' }}
              />
              <div className="flex-1">
                <p style={{ color: '#ffffff' }}>Initial Assessment</p>
                <p style={{ color: '#9CA3AF' }}>October 1, 2025</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
            <p style={{ color: '#ff1f1f' }}>Next Assessment Due</p>
            <p style={{ color: '#ffffff' }}>January 1, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}