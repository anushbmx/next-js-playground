export const Cards = [
  {key: 'target', name: 'Target', color: 'border-[#e13881]'},
  {key: 'contacted', name: 'Contacted', color: 'border-[#3788b1]'},
  {key: 'firstMeeting', name: 'First Meeting', color: 'border-[#aba3c0]'},
];

const notes = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export const Tasks = [
  {
    id: 1,
    status: 'target',
    title: 'Kevin M',
    url: 'kevin.xyz',
    contacts: [
      {
        name: 'Hannah',
        image: 'contact-1.png'
      },
      {
        name: 'Jack',
        image: 'contact-2.png'
      }
    ],
    last_activity: 'None',
    upcoming: 'None',
    reminder: 'Tomorrow',
    notes: notes
  },
  {
    id: 2,
    status: 'contacted',
    title: 'George M',
    url: 'george.xyz',
    contacts: [
      {
        name: 'Hannah',
      },
    ],
    last_activity: 'None',
    upcoming: 'None',
    reminder: 'Tomorrow',
    notes: notes
  },
  {
    id: 3,
    status: 'target',
    title: 'Norris',
    url: 'kevin.xyz',
    contacts: [
      {
        name: 'Smith',
      },
      {
        name: 'Jack',
      }
    ],
    last_activity: 'None',
    upcoming: 'None',
    reminder: 'Tomorrow',
    notes: notes
  },
  {
    id: 4,
    status: 'firstMeeting',
    title: 'Norris',
    url: 'kevin.xyz',
    last_activity: 'None',
    upcoming: 'None',
    reminder: 'Tomorrow',
    notes: notes
  }
];

