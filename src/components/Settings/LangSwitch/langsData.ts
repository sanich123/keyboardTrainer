export type LangData = {
  [key: string]: { [key: string]: { [key: string]: string | { [key: string]: string } } }
}

export const langsData: LangData = {
  en: {
    pageHome: {
      h1: 'Keyboard Racing',
      description: `Improve your keyboard skills in a game where you need
     to overtake your opponent on a typewriter and not break`,
      btnRules: 'Rules',
      btnStartNow: 'Start Now!',
      ctaText: 'Start your race! Find out your typing speed and accuracy. Do various races, improve your skills and compete with others. Try different languages and see your results in the "Statistics" section.',
    },
    pageGame: {
      trafficLight: {
        elapsedTime: 'Elapsed time',
        speed: 'Speed',
        accuracy: 'Accuracy',
      },
      hideShowKeyboard: 'Hide / Show keyboard',
    },
    pageStatistic: {
      h1: 'Statistic',
      h2Best: 'Your best results:',
      countRaces: 'Races',
      bestTime: 'Best time',
      speed: 'Speed',
      speedMeasure: 'chars / min',
      accuracy: 'Accuracy',
      driver: 'Driver',
      name: 'Name:',
      status: 'Status:',
      start: 'First strt:',
      startRace: 'Start race',
      photo: 'Change photo',
      award: 'Awards:',
      sp100: 'Speed over 100 char/min',
      sp200: 'Speed over 200 char/min',
      sp300: 'Speed over 300 char/min',
      acc: 'Accuracy 100%',
      chartName: 'Speed and Accuracy statistics of the last 10 races:',
    },
    pageNotFound: {
      notFound: 'Page Not Found',
    },
    menuMain: {
      about: 'About',
      race: 'Race',
      stats: 'Stats',
      rules: 'Rules',
    },
    menuSettings: {
      settingsBtn: 'Settings',
      lightBtn: 'Light',
      darkBtn: 'Dark',
      enBtn: 'En',
      ruBtn: 'Ru',
      onBtn: 'On',
      offBtn: 'Off',
    },
    menuLogin: {
      login: 'Login',
      email: 'E-mail',
      password: 'Password',
      btnLogin: 'Login',
      wrong: 'Wrong E-mail or Password',
    },
    footer: {
      sign: '© 2023. Special for RS School',
    },
  },
  ru: {
    pageHome: {
      h1: 'Клавиатурные гонки',
      description: `Совершенствуйте свои навыки клавиатуры в игре, где вам нужно
      обогнать соперника на машинке и не сломаться`,
      btnRules: 'Правила',
      btnStartNow: 'Старт!',
      ctaText: 'Начни свою гонку! Узнай свою скорость печати и точность. Делай различные заезды, совершенствуй свои навыки и соревнуйся с другими. Попробуй разные языки, и смотри свои результаты в разделе "Статистика".',
    },
    pageGame: {
      trafficLight: {
        elapsedTime: 'Пройденное время',
        speed: 'Скорость',
        accuracy: 'Точность',
      },
      hideShowKeyboard: 'Скрыть / показать клавиатуру',
    },
    pageStatistic: {
      h1: 'Статистика',
      h2Best: 'Твои лучшие результаты:',
      countRaces: 'Заезды',
      bestTime: 'Лучшее время',
      speed: 'Скорость',
      speedMeasure: 'симв / мин',
      accuracy: 'Точность',
      driver: 'Водитель',
      name: 'Имя:',
      status: 'Статус:',
      start: 'Первый старт:',
      startRace: 'Начать гонку',
      photo: 'Сменить фото',
      award: 'Награды:',
      sp100: 'Скорость более 100 симв/мин',
      sp200: 'Скорость более 200 симв/мин',
      sp300: 'Скорость более 300 симв/мин',
      acc: 'Аккуратность 100%',
      chartName: 'Статистика Скорости и Аккуратности 10 последних заездов:',
    },
    pageNotFound: {
      notFound: 'Страница не найдена',
    },
    menuMain: {
      about: 'Об игре',
      race: 'Гонка',
      stats: 'Статистика',
      rules: 'Правила',
    },
    menuSettings: {
      settingsBtn: 'Настройки',
      lightBtn: 'Светлая',
      darkBtn: 'Тёмная',
      enBtn: 'Англ',
      ruBtn: 'Рус',
      onBtn: 'Вкл',
      offBtn: 'Выкл',
    },
    menuLogin: {
      login: 'Войти',
      email: 'Почта',
      password: 'Пароль',
      btnLogin: 'Войти',
      wrong: 'Неверный логин или пароль',
    },
    footer: {
      sign: '© 2023. Специально для RS School',
    },
  },
};
