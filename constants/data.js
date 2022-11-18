export const Status = [
  {key: 'target', name: 'Target', border: 'target-border'},
  {key: 'contacted', name: 'Contacted', border: 'contacted-border'},
  {key: 'firstMeeting', name: 'First Meeting', border: 'first-meeting-border'},
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
    title: 'George',
    url: 'george.xyz',
    contacts: [
      {
        name: 'Bono',
        image: 'contact-3.png'
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
    url: 'norriscapitals.xyz',
    contacts: [
      {
        name: 'Peter',
        image: 'contact-3.png'
      },
      {
        name: 'William',
        image: 'contact-1.png'
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
    title: 'Ross',
    url: 'rosspartnership.xyz',
    last_activity: 'None',
    upcoming: 'None',
    reminder: 'Tomorrow',
    notes: notes
  }
];

