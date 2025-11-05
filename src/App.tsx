// src/App.tsx
import { useCallback } from 'react';
import './App.css';
import UserProfileCard from './components/UserProfileCard';
import { users } from './data/users';
import type { UserId } from './types';

export default function App() {
  const onViewDetails = useCallback((userId: UserId) => {
    console.log('View details for userId:', userId);
    alert(`ดูรายละเอียดผู้ใช้: ${userId}`);
  }, []);

  return (
    <div className="app-wrap">
      <h1>User Profile Card System</h1>
      <p className="subtitle">Workshop 4.1 – React Components / Props / One-way Data Flow</p>

      <div className="grid">
        {users.map((u) => (
          <UserProfileCard key={u.id} user={u} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
}
