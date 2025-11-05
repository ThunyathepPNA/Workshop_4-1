import type { UserData, UserId } from '../types';
import SkillTag from './SkillTag';

type UserProfileCardProps = {
  user: UserData;
  onViewDetails: (userId: UserId) => void;
};

export default function UserProfileCard({ user, onViewDetails }: UserProfileCardProps) {
  const { id, name, email, avatarUrl, isOnline, skills } = user;

  const statusColor = isOnline ? '#22c55e' : '#9ca3af'; // เขียว/เทา
  const statusText  = isOnline ? 'ออนไลน์' : 'ออฟไลน์';

  const handleView = () => onViewDetails(id);

  return (
    <div
      style={{
        width: 320,
        border: '1px solid #e5e7eb',
        borderRadius: 16,
        padding: 16,
        background: 'white',
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={avatarUrl || `https://i.pravatar.cc/100?u=${id}`}
            alt={`${name} avatar`}
            width={64}
            height={64}
            style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid #e5e7eb' }}
          />
          <span
            aria-label={statusText}
            title={statusText}
            style={{
              position: 'absolute',
              right: -2,
              bottom: -2,
              width: 14,
              height: 14,
              background: statusColor,
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong style={{ fontSize: 16 }}>{name}</strong>
          <a href={`mailto:${email}`} style={{ fontSize: 13, color: '#2563eb' }}>
            {email}
          </a>
          <span style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{statusText}</span>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 13, color: '#374151', marginBottom: 6 }}>Skills</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {skills.map((s, idx) => (
            <SkillTag key={idx} skillName={s.name} level={s.level} />
          ))}
        </div>
      </div>

      <button
        onClick={handleView}
        style={{
          marginTop: 14,
          width: '100%',
          padding: '10px 12px',
          borderRadius: 10,
          border: '1px solid #e5e7eb',
          background: '#111827',
          color: 'white',
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        ดูรายละเอียด
      </button>
    </div>
  );
}
