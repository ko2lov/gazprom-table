### Полное руководство по развёртыванию проекта

#### 1. Клонирование репозитория с GitHub

1. Откройте терминал и клонируйте репозиторий с GitHub:

   ```sh
   git clone https://github.com/your-repo/gazrpom-app.git
   cd gazrpom-app
   ```

#### 2. Структура проекта

```
gazrpom-app/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── Pagination/
│   │   │       ├── Pagination.js
│   │   │       └── Pagination.module.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
├── server/
│   ├── data.csv
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
├── docker-compose.yml
└── README.md
```

#### 3. Сборка и запуск контейнеров

1. **Сборка контейнеров**:

   ```sh
   docker-compose up --build
   ```

2. **Запуск контейнеров**:

   ```sh
   docker-compose up
   ```

#### 4. Доступ к приложению

После успешного запуска контейнеров, ваше клиентское приложение будет доступно по адресу:

```
http://127.0.0.1:8085
```

### Описание решения

- **Клиентская часть**:
  - Создана с использованием React.
  - Обслуживается на порту 8085.
  - Реализована таблица с данными и постраничной навигацией.

- **Серверная часть**:
  - Создана с использованием Node.js и Express.
  - Обслуживает API для получения данных из CSV файла.
  - Доступна по адресу `http://127.0.0.1:5001/api/data`.

- **Docker**:
  - Используется для контейнеризации клиентской и серверной частей.
  - Docker Compose для управления контейнерами.
