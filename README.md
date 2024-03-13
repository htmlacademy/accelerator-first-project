# accelerator-first-project

Стартовый репозиторий для работы над первым проектом в «Акселераторе» профессии «Фронтенд-разработчик»

## Начало работы

1. Установите node.js
2. Проверьте версию node.js с помощью `node --version`
3. Поддерживаемая версия сборки 18+
4. Установите зависимости с помощью

```shell
npm i
```

5. Запустите проект с помощью

```shell
npm run dev
```

6. Дополнительные команды для работы со сборкой

- `npm run convert-rastr`: создайте webp версии растровых изображений в папке `source/img/`;
- `npm run dev` запускает сервер для разработки;
- `npm run build` собирает оптимизированную версию проекта в папке `dist`;
- `npm run preview` запускает сервер с оптимизированной версией;
- спрайт с иконками собран из файлов в папке `source/img/sprite/`;
- для доступа к спрайту из `html` используйте путь `href="/__spritemap#sprite-{название файла иконки}"`;

7. В файле `index.html` в папке `source` описаны подсказки по структуре вашего проекта.

## Самопроверки

Тестирование Pixel Perfect

Запустить тестирование вашего проекта можно с помощью

```shell
npm run test 
```

Тестовый фреймворк обращается к адресу `localhost:3000` поэтому сервер должен быть запущен с `npm run dev`, запускайте
команду тестирования в новом терминале, не закрывая сервер с проектом.

В проекте используется множество дополнительных инструментов для самопроверки. Используйте их во время работы и перед
отправкой вашего проекта:

- `npm run w3c`: проверяет валидность HTML;
- `npm run linthtml`: проверяет разметку по правилам linthtml;
- `npm run html-validate`: проверяет HTML;
- `npm run lint-bem`: проверяет БЭМ;
- `npm run stylelint`: проверяет стили по правилам stylelint;
- `npm run lint-js`: проверяет скрипты по правилам eslint;
- `npm run ls-lint`: проверяет именование файлов и папок;
- `npm run editorconfig`: проверяет editorconfig.

Пример использования спрайта

    <img src="/__spritemap#sprite-logo-view" alt="Это спрайт">
    
    <svg class="svg">
      <use href="/__spritemap#sprite-user"></use>
    </svg>

Примеры требуемых атрибутов data-test="*"

    <div data-test="hero">hero</div>

    <div data-test="about">about</div>

    <div data-test="price">price</div>

    <div data-test="games">games</div>

    <div data-test="juri">juri</div>

    <div data-test="features">features</div>

    <div data-test="offers">offers</div>

    <div data-test="faq">faq</div>

    <div data-test="reviews">reviews</div>

    <div data-test="form">form</div>

    <div data-test="footer">footer</div>
