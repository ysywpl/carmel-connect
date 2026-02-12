import { GroupProfile, ResourceItem } from './types';

export const GROUPS: GroupProfile[] = [
  {
    id: '1',
    name: 'Berean Builders',
    description: 'A group focused on deep scriptural study and apologetics.',
    meetingTime: 'Fridays, 7:30 PM',
    location: 'Clementi Area',
    leaderName: 'John Tan',
    leaderContact: 'john.tan@example.com',
    category: 'Families',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Lighthouse YA',
    description: 'Community for young working adults to navigate faith in the workplace.',
    meetingTime: 'Wednesdays, 8:00 PM',
    location: 'Church Annex Room 2',
    leaderName: 'Sarah Lim',
    leaderContact: 'sarah.lim@example.com',
    category: 'Young Adults',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Golden Years',
    description: 'Fellowship and prayer for our senior members.',
    meetingTime: 'Thursday Mornings, 10:00 AM',
    location: 'Fellowship Hall',
    leaderName: 'Elder Chen',
    leaderContact: 'e.chen@example.com',
    category: 'Seniors',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'West Coast Agapao',
    description: 'A mix of families and singles focused on hospitality.',
    meetingTime: 'Saturdays, 6:00 PM',
    location: 'Jurong East',
    leaderName: 'Mark & Mary',
    leaderContact: 'm.mary@example.com',
    category: 'General',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const SHEPHERD_RESOURCES: ResourceItem[] = [
  { id: 's1', title: 'Shepherding the Heart (PDF)', type: 'PDF', url: '#', description: 'Guide on pastoral care within small groups.' },
  { id: 's2', title: 'Conflict Resolution Training', type: 'Video', url: '#', description: 'Workshop recording from 2024 retreat.' },
  { id: 's3', title: 'Visitation Log Template', type: 'Link', url: '#', description: 'Digital form for tracking member visits.' },
];

export const FACILITATOR_RESOURCES: ResourceItem[] = [
  { id: 'f1', title: 'Leading Effective Discussions', type: 'PDF', url: '#', description: 'Tips for keeping conversation flowing.' },
  { id: 'f2', title: 'Worship Song List 2024', type: 'Link', url: '#', description: 'Curated list of songs for group worship.' },
  { id: 'f3', title: 'Study Guide: Book of Romans', type: 'PDF', url: '#', description: 'Chapter by chapter breakdown.' },
];

export const DISCIPLESHIP_STEPS = [
  { 
    step: 1, 
    title: 'Come & See', 
    description: 'Inviting others to explore Christianity and the community.', 
    icon: '👀',
    resources: [
        { title: 'Alpha', url: '#' },
        { title: 'Exploring Christianity', url: '#' }
    ]
  },
  { 
    step: 2, 
    title: 'Follow Me', 
    description: 'Building a foundational relationship with Jesus and the Word.', 
    icon: '👣',
    resources: [
        { title: 'New Life in Christ', url: '#' }
    ]
  },
  { 
    step: 3, 
    title: 'Fish for Men', 
    description: 'Equipping believers to share their faith and serve others.', 
    icon: '🎣',
    resources: [
        { title: 'Breakfree Series', url: '#' },
        { title: 'Abide', url: '#' },
        { title: 'Grow in Christ Series', url: '#' }
    ]
  },
  { 
    step: 4, 
    title: 'Bear Fruit', 
    description: 'Mature leadership and multiplying disciples.', 
    icon: '🍇',
    resources: [
        { title: 'Disciple-Making Leadership Training', url: '#' },
        { title: 'Mentoring', url: '#' }
    ]
  },
];