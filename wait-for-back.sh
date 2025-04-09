#!/bin/bash

# Ждем, пока backend не станет доступен на порту 4200
until nc -z -v -w30 backend 4200; do
  echo "Waiting for backend connection..."
  sleep 1
done

# Когда backend доступен, выполняем миграции и билдим проект
echo "Backend is up, running build"

# Запускаем приложение
npm run build
exec npm run start