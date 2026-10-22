// Edit this file to change the schedule, rules, and facilities.
// "when" and "what" are keys: the real text is in src/locales/en.json and km.json.

export const schedule = [
  { when: 'schedule.daily',    what: 'schedule.kitchen' },
  { when: 'schedule.tuesday',  what: 'schedule.bible' },
  { when: 'schedule.saturday', what: 'schedule.church' },
  { when: 'schedule.sunday',   what: 'schedule.service' }
]

export const facilities = [
  { key: 'study', photoFolder: 'studyroom', icon: 'study' },
  { key: 'kitchen', photoFolder: 'kitchen', icon: 'kitchen' },
  { key: 'prayer', photoFolder: 'prayroom', icon: 'prayer' },
  { key: 'laundry', photoFolder: 'laundry', icon: 'laundry' },
  { key: 'wifi', photoFolder: 'wifi', icon: 'wifi' },
  { key: 'lounge', photoFolder: 'Common lounge', icon: 'lounge' }
]
export const rules = ['conduct', 'quiet', 'visitors', 'kitchen', 'spiritual']
export const applySteps = ['s1', 's2', 's3', 's4']
export const newsEvents = []
export const roomAvailability = []
export const tourVideoUrl = ''
