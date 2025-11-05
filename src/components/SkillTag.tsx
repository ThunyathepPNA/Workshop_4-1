import type { SkillLevel } from '../types';

type SkillTagProps = {
  skillName: string;
  level?: SkillLevel;
};

const levelToTitle = (level?: SkillLevel) => (level ? ` • ${level}` : '');

export default function SkillTag({ skillName, level }: SkillTagProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 8px',
        borderRadius: 999,
        background: '#eef2ff',   // ฟ้าอ่อน
        border: '1px solid #dbe4ff',
        fontSize: 12,
        marginRight: 6,
        marginBottom: 6,
      }}
      title={`${skillName}${levelToTitle(level)}`}
    >
      {skillName}{level ? ` (${level})` : ''}
    </span>
  );
}
