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
