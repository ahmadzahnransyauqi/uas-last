import { Flame, TrendingUp, Clock, Target, Award, Calendar, Dumbbell, Users } from 'lucide-react';

export function Dashboard() {
  const userStats = {
    name: 'John',
    streak: 12,
    workoutsThisWeek: 4,
    workoutsGoal: 5,
    caloriesBurned: 2340,
    activeMinutes: 245,
    upcomingClasses: 3,
    personalTrainingSessions: 2
  };

  const recentActivity = [
    { id: 1, type: 'Group Class', name: 'HIIT Blast', date: 'Today, 6:00 AM', duration: '60 min' },
    { id: 2, type: 'Personal Training', name: 'with Sarah Johnson', date: 'Yesterday, 5:00 PM', duration: '45 min' },
    { id: 3, type: 'Group Class', name: 'Yoga Flow', date: 'Dec 1, 8:00 AM', duration: '60 min' },
    { id: 4, type: 'Body Assessment', name: 'Full Composition Analysis', date: 'Dec 1, 2:00 PM', duration: '45 min' }
  ];

  const quickStats = [
    {
      icon: Flame,
      label: 'Day Streak',
      value: userStats.streak,
      unit: 'days',
      color: '#ff1f1f',
      bgColor: '#1a1a1a'
    },
    {
      icon: Dumbbell,
      label: 'Workouts This Week',
      value: `${userStats.workoutsThisWeek}/${userStats.workoutsGoal}`,
      unit: '',
      color: '#10b981',
      bgColor: '#1a1a1a'
    },
    {
      icon: Target,
      label: 'Calories Burned',
      value: userStats.caloriesBurned,
      unit: 'kcal',
      color: '#3b82f6',
      bgColor: '#1a1a1a'
    },
    {
      icon: Clock,
      label: 'Active Minutes',
      value: userStats.activeMinutes,
      unit: 'min',
      color: '#f59e0b',
      bgColor: '#1a1a1a'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 style={{ color: '#ffffff' }}>Welcome back, {userStats.name}! 👋</h2>
        <p style={{ color: '#9CA3AF' }}>Here's your fitness summary for today</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-6 rounded-lg"
              style={{ backgroundColor: '#252525' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: stat.bgColor }}
              >
                <Icon size={24} style={{ color: stat.color }} />
              </div>
              <p className="mb-1" style={{ color: '#9CA3AF' }}>{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 style={{ color: '#ffffff' }}>{stat.value}</h3>
                {stat.unit && <span style={{ color: '#9CA3AF' }}>{stat.unit}</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Workout Progress */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 style={{ color: '#ffffff' }}>Weekly Goal</h3>
            <span style={{ color: '#ff1f1f' }}>
              {Math.round((userStats.workoutsThisWeek / userStats.workoutsGoal) * 100)}%
            </span>
          </div>
          <div className="w-full h-3 rounded-full mb-2" style={{ backgroundColor: '#1a1a1a' }}>
            <div
              className="h-3 rounded-full transition-all"
              style={{
                backgroundColor: '#ff1f1f',
                width: `${(userStats.workoutsThisWeek / userStats.workoutsGoal) * 100}%`
              }}
            />
          </div>
          <p style={{ color: '#9CA3AF' }}>
            {userStats.workoutsGoal - userStats.workoutsThisWeek} more workout{userStats.workoutsGoal - userStats.workoutsThisWeek !== 1 ? 's' : ''} to reach your goal
          </p>
        </div>

        {/* Upcoming Classes */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ffffff' }}>Upcoming Classes</h3>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <h2 style={{ color: '#ffffff' }}>{userStats.upcomingClasses}</h2>
            <span style={{ color: '#9CA3AF' }}>scheduled</span>
          </div>
          <p style={{ color: '#9CA3AF' }}>This week</p>
        </div>

        {/* Training Sessions */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell size={20} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ffffff' }}>Training Sessions</h3>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <h2 style={{ color: '#ffffff' }}>{userStats.personalTrainingSessions}</h2>
            <span style={{ color: '#9CA3AF' }}>booked</span>
          </div>
          <p style={{ color: '#9CA3AF' }}>Next 7 days</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="p-6 rounded-lg mb-8" style={{ backgroundColor: '#252525' }}>
        <div className="flex items-center gap-2 mb-6">
          <Award size={24} style={{ color: '#ff1f1f' }} />
          <h3 style={{ color: '#ffffff' }}>Recent Achievements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#1a1a1a' }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#252525' }}
            >
              <Flame size={24} style={{ color: '#ff1f1f' }} />
            </div>
            <div>
              <p style={{ color: '#ffffff' }}>10 Day Streak</p>
              <p style={{ color: '#9CA3AF' }}>Consistency Champion</p>
            </div>
          </div>
          <div className="p-4 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#1a1a1a' }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#252525' }}
            >
              <Target size={24} style={{ color: '#10b981' }} />
            </div>
            <div>
              <p style={{ color: '#ffffff' }}>Weekly Goal Met</p>
              <p style={{ color: '#9CA3AF' }}>Last week</p>
            </div>
          </div>
          <div className="p-4 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#1a1a1a' }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#252525' }}
            >
              <TrendingUp size={24} style={{ color: '#3b82f6' }} />
            </div>
            <div>
              <p style={{ color: '#ffffff' }}>5000 Calories Burned</p>
              <p style={{ color: '#9CA3AF' }}>This month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
        <div className="flex items-center gap-2 mb-6">
          <Calendar size={24} style={{ color: '#ff1f1f' }} />
          <h3 style={{ color: '#ffffff' }}>Recent Activity</h3>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={activity.id}
              className="p-4 rounded-lg flex items-center justify-between"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      backgroundColor: '#252525',
                      color: '#ff1f1f'
                    }}
                  >
                    {activity.type}
                  </span>
                  <p style={{ color: '#ffffff' }}>{activity.name}</p>
                </div>
                <p style={{ color: '#9CA3AF' }}>{activity.date}</p>
              </div>
              <span style={{ color: '#9CA3AF' }}>{activity.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
