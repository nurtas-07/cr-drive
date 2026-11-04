CR DRIVE — ВЕРСИЯ ДЛЯ GITHUB PAGES

Сайт подготовлен для https://nurtas-07.github.io/cr-drive/
Пути к изображениям, скриптам, стилям и шрифтам относительные.
Работает также на домене без подпапки и в локальном сервере.

1. Скопируйте содержимое этой папки в корень репозитория cr-drive.
2. Выполните git add ., git commit и git push.
3. На GitHub откройте Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: ветка с загруженными файлами (обычно main), папка /(root).
6. Нажмите Save. После успешной сборки появится кнопка Visit site.

Файл .nojekyll должен быть в корне репозитория.
Для бесплатного GitHub Pages репозиторий должен быть публичным.
Демо работает в браузере; ссылка на существующий кабинет ведёт на Cloudflare.

Локальный просмотр: START.cmd.
Исходники: source/. npm ci → npm run dev.
Новая сборка: npm run build в source/, результат в source/dist/.
