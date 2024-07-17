#Калькулятор


Описание проекта
Калькулятор на вход принимает строку с математическим выражением, которая может включать:

Операции сложения (+), вычитания (-), умножения (*), деления (/)
Извлечение квадратного корня (√)
Получение процента (%)
Круглые скобки для группировки операций
Математическое выражение может вводиться с клавиатуры или с помощью кнопок на интерфейсе калькулятора. Вычисление выполняется по нажатию на кнопку "=" или клавишу Enter. Очистка выражения происходит при нажатии клавиши Esc.

Приложение использует React и TypeScript для интерфейса и Webpack для сборки. Оно адаптировано для мобильных устройств, занимая весь экран браузера на телефоне. Исходный код покрыт тестами, и в проекте настроен статический анализ кода с использованием ESLint

Инструкции по запуску и развертыванию:
1. Клонируйте репозиторий проекта:
git clone git@github.com:teacher-cheater/calculator-app.git
cd calculator-app

2. Установите зависимости:
npm install

3. Настройка ESLint:
Убедитесь, что у вас установлены все необходимые пакеты для статического анализа кода.
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jest --save-dev

4. Запуск проекта:
Сборка и запуск в режиме разработки:

npm start
Это команда запустит Webpack Dev Server, и вы сможете увидеть приложение по адресу http://localhost:3000.

Сборка для продакшена:
npm run build:prod
Это команда создаст оптимизированную сборку проекта в папке dist (минимизорованные файлы)

Сборка для разработки:
npm run build:dev
Это команда создаст сборку проекта в папке dist

Запуск тестов:
npm run test
Это команда выполнит тесты, которые вы написали для вашего приложения.

Настройки для VS Code:
Для корректной работы prettier нужно использовать горячие клавиши shift+alt+f,
тем самым он отформатирует файл по заданным параметрам (файл в корне проекта .prettierrc) 

Как только вы запутите приложение, оно будет выглядеть вот так. 
Десктоп, планшет и мобильная версия
<img width="951" alt="Screenshot_4" src="https://github.com/user-attachments/assets/0fd24232-25b0-437f-86aa-9f3c91681c4b">
<img width="301" alt="Screenshot_2" src="https://github.com/user-attachments/assets/baa3ffe2-68d0-4f27-9764-2ddc8a3b349a">
<img width="189" alt="Screenshot_3" src="https://github.com/user-attachments/assets/ba6cdbdc-a394-46bc-b460-6f23efd2b1d0">


