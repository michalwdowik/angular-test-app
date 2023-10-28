export interface Lesson {
  name: string;
  level: Level;
  description: string;
}

export type Level = 'easy' | 'medium' | 'difficult';
