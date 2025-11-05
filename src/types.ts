// src/types.ts
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type Skill = {
  name: string;
  level?: SkillLevel;
};

export type UserId = string | number;

export interface UserData {
  id: UserId;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: Skill[];
}
