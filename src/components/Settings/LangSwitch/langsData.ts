export type LangData = {
  [key: string]: {
    [key: string]: {
      [key: string]: (string | { [key: string]: string })
    }
  }
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
      hideShowKeyboardBtn: 'Hide / Show keyboard',
      textWindow: {
        startMessage: 'Click me to Start',
        continueMessage: 'Click me to Continue',
        gameOverMessage: 'Game over!',
      },
      trafficLight: {
        elapsedTime: 'Elapsed time',
        speed: 'Speed',
        accuracy: 'Accuracy',
        elapsedTimeUnit: 'min:sec',
        speedUnit: 'char/min',
        accuracyUnit: '%',
      },
      keyLangBtn: {
        ru: 'Layout: Ru',
        en: 'Layout: En',
      },
      newGameBtn: 'New Game',

    },
    pageStatistic: {
      bestTime: 'Best time',
      speed: 'Speed',
      accuracy: 'Accuracy',
    },
    pageNotFound: {
      notFound: 'Page Not Found',
    },
    menuMain: {
      about: 'About',
      race: 'Race',
      lessons: 'Lessons',
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
      hideShowKeyboardBtn: 'Скрыть / Показать клавиатуру',
      textWindow: {
        startMessage: 'Нажми меня для начала',
        continueMessage: 'Нажми меня для продолжения',
        gameOverMessage: 'Игра окончена!',
      },
      trafficLight: {
        elapsedTime: 'Пройденное время',
        speed: 'Скорость',
        accuracy: 'Точность',
        elapsedTimeUnit: 'мин:сек',
        speedUnit: 'зн/мин',
        accuracyUnit: '%',
      },
      keyLangBtn: {
        ru: 'Раскладка: Рус',
        en: 'Раскладка: Англ',
      },
      newGameBtn: 'Новая игра',
    },
    pageStatistic: {
      bestTime: 'Лучшее время',
      speed: 'Скорость',
      accuracy: 'Точность',
    },
    pageNotFound: {
      notFound: 'Страница не найдена',
    },
    menuMain: {
      about: 'Об игре',
      race: 'Гонка',
      lessons: 'Уроки',
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
