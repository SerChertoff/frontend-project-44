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

[![asciicast](https://asciinema.org/a/eIVgx2qVKDqwPx6o.svg)](https://asciinema.org/a/eIVgx2qVKDqwPx6o)

В записи: полное прохождение (три верных ответа, поздравление) и второй запуск с **ошибкой** на первом вопросе. Исходный файл в репозитории: [brain-calc.cast](brain-calc.cast). Локально: `asciinema play brain-calc.cast`.

### brain-gcd

[![asciicast](https://asciinema.org/a/UfPHkeJhzyPpE53L.svg)](https://asciinema.org/a/UfPHkeJhzyPpE53L)

В записи: три верных ответа (как в задании) и второй запуск с неверным ответом для пары `25 50`. Исходный файл: [brain-gcd.cast](brain-gcd.cast). Локально: `asciinema play brain-gcd.cast`.

### brain-progression

_После загрузки на asciinema.org вставьте **одну строку** с бейджем сюда (между этим абзацем и блоком «Локальная запись…») — шаблон в п. 6 ниже._

**Локальная запись в репозитории:** [brain-progression.cast](brain-progression.cast) (три раунда по примеру из задания и сценарий с неверным ответ `1` на первом вопросе). Просмотр без загрузки на сайт:

```bash
asciinema play brain-progression.cast
```

#### Как опубликовать запись на asciinema.org и вставить бейдж в README

1. **Перейдите в корень проекта** (в WSL путь к этой папке на диске C обычно такой):

   ```bash
   cd "/mnt/c/Users/Home/Desktop/Игры разума"
   ```

2. **Установите CLI asciinema** (если ещё не стоит), например в Ubuntu под WSL: `sudo apt install asciinema`.

3. **Привяжите установку к аккаунту** (чтобы запись не удалили через ~7 дней): выполните `asciinema auth`, откройте ссылку в браузере и подтвердите (один раз на машину).

4. **Загрузите файл:**

   ```bash
   asciinema upload brain-progression.cast
   ```

5. В выводе появится строка вида `https://asciinema.org/a/XXXXXXXX` — откройте её в браузере. **Идентификатор записи** — это последний фрагмент пути после `/a/` (латиница и цифры, длина может различаться).

6. **Вставьте бейдж в этот README** сразу под заголовком `### brain-progression` (над текстом «Локальная запись…»): одна строка Markdown, подставив **свой** id **дважды** (и в `.svg`, и в обычной ссылке):

   ```markdown
   [![asciicast](https://asciinema.org/a/ВАШ_ID.svg)](https://asciinema.org/a/ВАШ_ID)
   ```

   Пример формата (подставьте **свой** id из браузера, не копируйте этот):

   ```markdown
   [![asciicast](https://asciinema.org/a/d7QxK9mNpL2rStVw.svg)](https://asciinema.org/a/d7QxK9mNpL2rStVw)
   ```

7. Сохраните README, закоммитьте и отправьте изменения в репозиторий:

   ```bash
   git add README.md
   git commit -m "docs: asciinema для brain-progression"
   git push
   ```

**Онлайн-превью:** после шага 6 сюда же (под заголовком раздела) добавьте строку бейджа из пункта 6 — как у разделов brain-even, brain-calc и brain-gcd выше.

## Публикация пакета (dry-run)

```bash
make publish
```

## Линтер

```bash
make lint
```
