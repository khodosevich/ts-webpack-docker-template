# Проект React с TypeScript, Vite и Docker

Этот проект представляет собой шаблон для быстрого старта разработки React-приложения с использованием TypeScript, Webpack и Docker.

## Технологии

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Docker](https://www.docker.com/) 


## Запуск проекта локально

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/khodosevich/ts-webpack-docker-template.git

2. Перейдите в каталог проекта:

    ```bash
    cd ts-webpack-docker-template

3. Установите зависимости:

    ```bash
    npm i

4. Запустите приложение локально:

    ```bash
    npm run start

## Запуск проекта с использованием Docker

1. Соберите Docker-образ:

    ```bash
    docker build -t webpack-ts .

2. Запустите контейнер:

    ```bash
    docker run -d -p 80:80 webpack-ts

### Приложение будет доступно по адресу http://localhost.

# ts-webpack-docker-template
