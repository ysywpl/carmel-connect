export interface GroupProfile {
  id: string;
  name: string;
  description: string;
  meetingTime: string;
  location: string;
  leaderName: string;
  leaderContact: string;
  category: 'Young Adults' | 'Families' | 'Seniors' | 'General';
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Link';
  url: string;
  description: string;
}

export enum UserRole {
  GUEST = 'GUEST',
  SHEPHERD = 'SHEPHERD',
  FACILITATOR = 'FACILITATOR'
}