import type { UserData } from '../types';

export const users: UserData[] = [
  {
    id: 101,
    name: 'Alice Kim',
    email: 'alice.kim@example.com',
    isOnline: true,
    avatarUrl: '',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'UI Design' },
    ],
  },
  {
    id: 102,
    name: 'Somchai Boonmee',
    email: 'somchai@example.com',
    isOnline: false,
    avatarUrl: '',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Beginner' },
    ],
  },
  {
    id: 'u-103',
    name: 'Haruto Sato',
    email: 'haruto@example.com',
    isOnline: true,
    avatarUrl: '',
    skills: [
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Testing' },
    ],
  },
  {
    id: 104,
    name: 'Kanyarat P.',
    email: 'kanyarat@example.com',
    isOnline: false,
    avatarUrl: '',
    skills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'Prototyping', level: 'Intermediate' },
    ],
  },
];
