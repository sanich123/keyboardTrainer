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

