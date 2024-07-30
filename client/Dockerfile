# Используем базовый образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем React-приложение
RUN npm run build

# Устанавливаем 'serve' для обслуживания статических файлов
RUN npm install -g serve

# Открываем порт 8085
EXPOSE 8085

# Запускаем приложение с помощью 'serve'
CMD ["serve", "-s", "build", "-l", "8085"]