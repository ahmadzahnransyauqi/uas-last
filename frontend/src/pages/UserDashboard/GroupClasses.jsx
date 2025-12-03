import { Users, Clock, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

const classes = [
  {
    id: 1,
    name: 'HIIT Blast',
    instructor: 'Sarah Johnson',
    time: '6:00 AM - 7:00 AM',
    day: 'Monday, Wednesday, Friday',
    location: 'Studio A',
    spots: 12,
    totalSpots: 20,
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Yoga Flow',
    instructor: 'Emma Rodriguez',
    time: '8:00 AM - 9:00 AM',
    day: 'Tuesday, Thursday',
    location: 'Studio B',
    spots: 5,
    totalSpots: 15,
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Spin Class',
    instructor: 'Mike Chen',
    time: '5:30 PM - 6:30 PM',
    day: 'Monday, Wednesday',
    location: 'Cycling Room',
    spots: 8,
    totalSpots: 25,
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Strength Training',
    instructor: 'David Kim',
    time: '7:00 PM - 8:00 PM',
    day: 'Tuesday, Thursday, Saturday',
    location: 'Weight Room',
    spots: 15,
    totalSpots: 18,
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Pilates Core',
    instructor: 'Emma Rodriguez',
    time: '10:00 AM - 11:00 AM',
    day: 'Saturday, Sunday',
    location: 'Studio B',
    spots: 6,
    totalSpots: 12,
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Boxing Bootcamp',
    instructor: 'Sarah Johnson',
    time: '6:00 PM - 7:00 PM',
    day: 'Monday, Friday',
    location: 'Studio A',
    spots: 10,
    totalSpots: 16,
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=300&fit=crop'
  }
];

export default function GroupClasses() {
  const [joinedClasses, setJoinedClasses] = useState([]);

  const handleJoinClass = () => {
    if (joinedClasses.includes(classId)) {
      setJoinedClasses(joinedClasses.filter(id => id !== classId));
    } else {
      setJoinedClasses([...joinedClasses, classId]);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 style={{ color: '#ffffff' }}>Group Classes</h2>
        <p style={{ color: '#9CA3AF' }}>Join our energizing group fitness classes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((gymClass) => (
          <div
            key={gymClass.id}
            className="rounded-lg overflow-hidden flex flex-col"
            style={{ backgroundColor: '#252525' }}
          >
            <img
              src={gymClass.image}
              alt={gymClass.name}
              className="w-full h-40 object-cover"
            />
            
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 style={{ color: '#ffffff' }}>{gymClass.name}</h3>
                <span
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ff1f1f'
                  }}
                >
                  {gymClass.difficulty}
                </span>
              </div>

              <p className="mb-3" style={{ color: '#9CA3AF' }}>with {gymClass.instructor}</p>

              <div className="space-y-2 mb-4 flex-1" style={{ color: '#9CA3AF' }}>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{gymClass.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{gymClass.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{gymClass.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{gymClass.spots} spots available of {gymClass.totalSpots}</span>
                </div>
              </div>

              <button
                onClick={() => handleJoinClass(gymClass.id)}
                className="w-full py-2 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: joinedClasses.includes(gymClass.id) ? '#1a1a1a' : '#ff1f1f',
                  color: '#ffffff',
                  border: joinedClasses.includes(gymClass.id) ? '1px solid #ff1f1f' : 'none'
                }}
              >
                {joinedClasses.includes(gymClass.id) ? 'Joined' : 'Join Class'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}