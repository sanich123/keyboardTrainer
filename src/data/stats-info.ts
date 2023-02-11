interface StatsInfo {
  bestResults: {
    races: number
    speed: number
    accuracy: number
  }
  user: {
    name: string
    dateReg: string
    picture: number
  }
}

export const STATS_INFO: StatsInfo[] = [
  {
    bestResults: {
      races: 120,
      speed: 258,
      accuracy: 100,
    },
    user: {
      name: 'Anna Armare',
      dateReg: '20/03/2023',
      picture: 2,
    },
  },
];

export const DRIVER_STATUS = {
  en: {
    jun: 'junior',
    midl: 'midl',
    senior: 'senior',
    teamlead: 'teamlead',
  },
  ru: {
    jun: 'джуниор',
    midl: 'мидл',
    senior: 'сеньор',
    teamlead: 'тимлид',
  },
};

export const LAST_RACES = [
  {
    date: '23/02/2023',
    speed: 122,
    acc: 85,
  },
  {
    date: '23/02/2023',
    speed: 100,
    acc: 85,
  },
  {
    date: '23/02/2023',
    speed: 132,
    acc: 100,
  },
  {
    date: '23/02/2023',
    speed: 122,
    acc: 85,
  },    {
    date: '23/02/2023',
    speed: 140,
    acc: 91,
  },
  {
    date: '23/02/2023',
    speed: 122,
    acc: 85,
  },
  {
    date: '23/02/2023',
    speed: 100,
    acc: 85,
  },
  {
    date: '23/02/2023',
    speed: 132,
    acc: 100,
  },
  {
    date: '23/02/2023',
    speed: 122,
    acc: 85,
  },    {
    date: '23/02/2023',
    speed: 140,
    acc: 91,
  },
];

