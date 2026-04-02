### Hexlet: статус проверок и линтера

[![Actions Status](https://github.com/SerChertoff/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SerChertoff/frontend-project-44/actions)

Замените `SerChertoff/frontend-project-44` в ссылке на ваш репозиторий после пуша на GitHub.

## Установка

```bash
make install
```

Первый раз, если нет `package-lock.json`, выполните `npm install`, затем для CI используйте `make install` (`npm ci`).

## Требования

- Node.js 17.9.1+
- npm 8.11.0+

## Локальный запуск

После `npm install` из корня проекта:

```bash
npx brain-games
npx brain-even
npx brain-calc
npx brain-gcd
npx brain-progression
npx brain-prime
```

Или через Makefile: `make brain-even` и т.д.

## Публикация пакета (dry-run)

```bash
make publish
```

## Линтер

```bash
make lint
```
