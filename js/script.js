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

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;
    let randomNumber = Math.round((Math.random() * 100));

    if (selector[0] === '.') {
      element = document.createElement('div');
      element.class = selector;
      element.innerHTML = `<p>CreateElement with class + ${randomNumber}</p>`;
    } else if (selector[0] === '#') {
      element = document.createElement('p');
      element.id = selector;
      element.innerHTML = `<p>CreateElement with id + ${randomNumber}</p>`;
    } else alert('что-то пошло не так');

    element.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`;
    document.body.appendChild(element);
  }
}

const newBlock = new DomElement('.block', 25, 500, 'red', 20);
const newBlockId = new DomElement('#best', 20, 250, 'green', 14);

newBlock.createElement();
newBlockId.createElement();
