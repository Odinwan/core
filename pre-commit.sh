#!/bin/sh
# Ищем все измененные файлы, которые нужно отформатировать
FILES=$(git diff --cached --name-only --diff-filter=ACM | grep "src/.*\.\(tsx\|ts\|jsx\|js\|md\)$")
if [ -z "$FILES" ]
  then
    echo "No files to format. Exiting pre-commit hook."
    exit 0
fi
echo "Formatting files:\n$FILES"
cd ..

# Форматируем каждый файл отдельно
echo "$FILES" | xargs -I{} sh -c 'src/node_modules/.bin/prettier --write "{}"' sh
#
## Проверяем, что после форматирования ошибок не было
#if git diff-index --quiet HEAD --; then
#  echo "Prettier ran successfully"
#else
#  echo "Prettier failed. Please fix the formatting errors and try again."
#  exit 1
#fi
