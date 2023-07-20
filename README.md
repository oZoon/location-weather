## Содержание

- [о проекте](#about)
- [быстрый старт](#getting_started)
- [демо](#usage)
- [инструменты](#built_using)

## о проекте <a name = "about"></a>

Простой веб-проект, показывает текущую погоду на основании строки поиска локации

## быстрый старт <a name = "getting_started"></a>

```
clone https://github.com/oZoon/location-weather.git
cd location-weather
npm i
переименовать .env.example в .env
зарегистрироваться на двух сервисах:
1. https://openweathermap.org/ и 
2. https://www.graphhopper.com/,
получить ключи от каждого, вставить в соответстующие переменные в .env

npm run start - для разработки
npm run build - для продакшн

```

## демо <a name="usage"></a>

<a href="http://on-cherry.ru/test-tasks/location-weather/">ДЕМО</a>

## инструменты <a name = "built_using"></a>

- [React](https://ru.react.js.org/) - React
- [MobX](https://mobx.js.org/README.html) - MobX
- [Typescript](https://www.typescriptlang.org/docs/) - Typescript

- без адаптива
- без обработки гонки запросов

сделан следующий функционал:
- поиск по введенному значению, вывод 5 совпадений
- сохранение истории поиска
- сброс истории поиска
