### Hexlet: статус проверок и линтера

[![Actions Status](https://github.com/SerChertoff/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SerChertoff/frontend-project-44/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SerChertoff_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=SerChertoff_frontend-project-44)

## Установка

```bash
make install
```

Первый раз, если нет `package-lock.json`, выполните `npm install`, затем для CI используйте `make install` (`npm ci`).

## Требования

- Node.js 18.18+ (для ESLint 9; рекомендуется текущая LTS)
- npm 9+

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

## Демонстрация (asciinema)

### brain-even

[![asciicast](https://asciinema.org/a/PgLMb14rLXLkc0Ta.svg)](https://asciinema.org/a/PgLMb14rLXLkc0Ta)

### brain-calc

Запись **[brain-calc.cast](brain-calc.cast)** в корне репозитория: запуск `node bin/brain-calc.js`, полное прохождение (три верных ответа, поздравление), затем второй запуск с **ошибкой** на первом вопросе (вывод «wrong answer», «Let's try again»).

Воспроизведение локально:

```bash
asciinema play brain-calc.cast
```

Чтобы получить превью как у brain-even, загрузите этот файл на [asciinema.org](https://asciinema.org) и добавьте в README строку вида `[![asciicast](https://asciinema.org/a/<id>.svg)](https://asciinema.org/a/<id>)`.

## Публикация пакета (dry-run)

```bash
make publish
```

## Линтер

```bash
make lint
```
