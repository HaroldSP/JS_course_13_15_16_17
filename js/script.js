/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// 1) Создать функцию-конструктор DomElement, который

//    содержит свойства
//   - selector,
//   - height,
//   - width,
//   - bg,
//   - fontSize

// содержит метод, который создает элемент на странице в зависимости от условия:

// - если строка selector начинается с точки, создаем div с классом
// - если строка selector начинается с решетки # то создаем параграф с id

// пример:

// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"

// с помощью cssText задавать стили:

//   - высотой - height,
//   - шириной - width,
//   - background - bg
//   - размер текста fontSize

// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.

// 2) Создать новый объект на основе класса DomElement

// 3) Вызвать его метод чтобы создать элемент на странице

// Проверить, чтобы все работало и не было ошибок в консоли
// Сохранить проект в отдельном репозитории на GitHub;
