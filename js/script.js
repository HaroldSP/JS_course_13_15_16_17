/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

/*
1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей.
Ему необходимо задать фон(background) любого цвета и свойство position: absolute.

2) Поместить его на страницу только после выполнения события DOMContentLoaded.
Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)

3) Написать обработчик события для keydown, который будет принимать callback-функцию.
Данная функция будет отлавливать нажатие на стрелки клавиатуры.
В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз)
наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.
*/

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

// const newBlock = new DomElement('.block', 25, 500, 'red', 20);
// const newBlockId = new DomElement('#best', 20, 250, 'green', 14);

// newBlock.createElement();
// newBlockId.createElement();
