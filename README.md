# External JavaScript course
## Задания и теоретическая база
Все необходимые материалы с примерами кода, а также задания размещены в соответствующих разделах на [WebPurple-Learn](https://webpurple.github.io/learn/).

## Необходимое ПО
* [NodeJS (LTS)](https://nodejs.org/en/);
* [Git](https://git-scm.com/).

## Начало работы
* Fork'аем репозиторий с помощью кнопки "Fork" справа вверху;
* В настройках репозитория добавляем к репозиторию тренера;
* Клонируем свою копию репозиторий на компьютер с помощью команды `git clone <url репозитория>`;
* Открываем терминал в директории склонированного проекта;
* Устанавливаем модули с помощью команды `npm install`.

## Flow
Выполнение каждой лабораторной работы выполняется в отдельной ветке. В директории `src` размещены директории соответствующие темам лабораторных работ.

**Каждая задача в лабораторной работе должна быть выполнена в отдельном файле, который называется по имени задачи, например, ``task-01.js``, где `01` - номер задачи.**

Для выполнения практической работы необходимо создать ветку (название соответствует теме практической работы) с помощью команды `git checkout -b <название ветки>` (переход в ветку осуществляется той же командой без ключа `-b`), после создания ветки необходимо удалить в директории `src` все лишние директории, не соответствующие теме текущей практической работы.    

Внутри директории, соответствующей теме практической работы, может присутствовать директория `test`, в которой расположены тесты, для проверки правильности выполнения работы, и набор файлов `.js`, в которых подразумевается размещение решения задания, либо директория может быть пустой.    

В каком файле размещать решение, каким образом именовать функции и производить вывод информации чётко регламентируется в задании, для корректной работы тестов требуется строго следовать этому регламенту.    

После выполнения задания необходимо выполнить *commit* изменений с помощью команды `git commit -a -m "<комментарий>"`, после чего отправить изменения на GitHub с помощью команды `git push origin <название ветки задания>`.    

На GitHub необходимо сделать *pull request* ветки задания в ветку `master`, а также запросить ревью у тренера.    

Для корректной работы автоматической проверки тестов и линтера необходимо настроить Travis CI, краткое руководство по этому процессе представлено в конце руководства.    

В случае подтверждения от тренера и успешного выполнения тестов тренеру необходимо подтвердить перенос кода из задания в ветку `master`. Успешно влитое ревью означает успешно завершённое задание. Таким образом к концу обучения в репозитории должно быть 14 закрытых *pull request*, а также код всех выполненных заданий, распределённый по директориям, соответствующим темам, должен находиться в ветке `master`.    

## Тесты и линтер
Для предварительной проверки правильности выполнения заданий используется система тестов, а для проверки правильности форматирования и оформления кода используется линтер. Тесты (если они есть) и линтер запускаются локально при выполнении *commit*, а также на стороне GitHub при создании *pull request*.    

В случае, если необходимо игнорировать замечания линтера, можно воспользоваться директивой отключания линтера `eslint-disable-line`. Директива оформляется в виде комментария в конце необходимой строки, после директивы лучше указать конкретное правило, которое нужно отключить, чтобы не упустить других замечаний.    

```javascript
console.log(a); // eslint-disable-line
console.log(b); // eslint-disable-line no-console
```

## Дополнения
Все интересующие вопросы могут быть задану тренеру, ниже представлено дополнение к некоторым моментам руководства в виде пошагового алгоритма.

### Создание и работа с Pull request и добавление тренера
Необходимо перейти на страницу своего репозитория на GitHub, кликнуть по пункту "Pull Request" в верхнем меню, далее нажать на кнопку "New pull request".    

Слияние веток происходит по направлению, указанному стрелками в интерфейсе создания *pull request*, слева должна быть выбрана ветка "master", справа - ветка с практической работой, отправляемой на проверку.    

После выбора веток в интерфейсе будет представлена форма создания *pull request*, в которой необходимо задать заголовок, соответствующий теме практической работы, а в поле комментария необходимо более развёрнуто описать проделанную работу и/или добавить текст задания. После заполнения формы необходимо нажать кнопку "Create pull request", после чего браузер выполнит перенаправление на страницу созданного *pull request*.    

В случае, если тренер оставил замечания к *pull request* и не зачёл лабораторную работу, необходимо исправить замечания и выполнить *push* изменений в соответствующую ветку, после чего ответить на комментарии тренера, где описать результат проделанной работы.    

Когда тренер зачёл практическую работу и все проверки тестов и линтера были выполнены, становится активной (зелёной) кнопка "Merge pull request", по нажатию на которую можно влить изменения из ветки практической работы в ветку *master*, что означает сдачу практической работы.    

## Настройка автоматических проверок теста и линтера
Настройка проверок тестов и линтера производится после выполнения того, как репозиторий скопирован в профиль.    
Необходимо зайти на [travis-ci.org](https://travis-ci.org/), авторизоваться через аккаунт GitHub, в списке репозиториев нажать на плюс и в открывшемся интерфейсе выбрать свой репозиторий и перевести соответствующий переключатель в положение "активно" (зелёный цвет).    

## Feedback
Замечания и пожелания можно оформить в виде [Issues](https://github.com/webpurple/external-courses/issues) в этом репозитории.    
