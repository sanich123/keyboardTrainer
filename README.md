<h1 align="center">KEYBOARD TRAINER</h1>

In collaboration with: [predmaxim](https://github.com/predmaxim), [irinaid](https://github.com/IrinaIID)

1. How to launch: 

copy and past into your code-editor command-line: `git clone git@github.com:sanich123/keyboardTrainer.git project&&cd project&&npm i&&npm start`

*or you can use deployed version:* [Deployed](https://visionary-heliotrope-66de37.netlify.app/)

2. Screenshots: 
![Снимок экрана от 2023-02-26 17-48-52](https://user-images.githubusercontent.com/62261839/221411407-80a4583b-10f5-432a-b481-4ade9a1c4085.png)
![Group 282](https://user-images.githubusercontent.com/101494885/221437607-20bcdee5-7b13-44fa-b752-0bcca16a1bbc.png)
3. Done 21.02.2023
4. Link to the backend-app: [server](https://github.com/sanich123/serverKeyboardTrainer).
5. [Projects](https://github.com/users/sanich123/projects/1)

### Tech stack:
**Front-end:** 
Create React App, React, Redux, Typescript, Sass/Tailwind, Auth0, Jest, React Testing Library, Framer Motion, React Icons, Chart.js, 

**Back-end:** 
Node.js, Express, Mongoose.

### Implemented:
+ Процесс игры основан на использовании клавиатурных событий. Модальные окна закрываются по нажатию esc.
+ Два языка интерфейса, самого текста игры и визуальной клавиатуры.
+ По клику на кнопку "Правила" появляется модальное окно.
+ Реализован routing (без перезагрузки страницы приложения).
+ Возможность кастомизации приложения, Выбор языка и темы приложения.
+ Реализованы анимации, для создания которых используются ключевые кадры или svg-анимация.
+ Приложение выполнено в едином стиле
+ Приложение работает на телефоне/планшете/PC.
*Адаптивность приложения до разрешения 360px*
+ Есть страница статистики, графики, лучшие результаты. Ход игры (печать текста) интерактивно отображается на визуальной клавиатуре и подсвечивается печатаемый текст.
+ Написаны unit тесты.
+ В LocalStorage cохраняется выбранная тема и язык приложения
+ Приложение написана на TypeScript.
+ Авторизация реализована с помощью Auth0

**Back-end:**
+ Использован REST API.
+ Подключение и работа с БД.
+ Используется ORM(mongoose).
+ Приложение разбито на микросервисы.
+ Результаты заездов зарегистрированных пользователей отправляются на сервер. В кабинете пользователя отображается статистика данного пользователя и информация о пользователе согласно полученным данным при регистрации.
