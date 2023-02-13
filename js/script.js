/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// Сохранять данные о делах в localStorage (советую в виде массива)
// Дела из localStorage подгружаться должны автоматически при загрузки странице

// внимание чтобы сохранить массив в localStorage необходимо его конвертировать в json формат (JSON.stringify)

// внимание из localStorage мы всегда получаем json строку и её необходимо конвертировать обратно в формат javascript (JSON.parse)

//  Проверить, чтобы все работало и не было ошибок в консоли (Учесть вариант отсутствия объекта в localstorage пользователя при первой загрузке страницы)

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
// const toDoRemove = document.querySelector('.todo-remove');

const toDoData = [];

const render = function () {
  todoList.innerHTML = '';
  todoCompleted.innerHTML = '';

  toDoData.forEach(function (item, index) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
    '<div class="todo-buttons">' +
    '<button class="todo-remove"></button>' +
    '<button class="todo-complete"></button>' +
    '</div>'

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector('.todo-complete').addEventListener('click', function () {
      item.completed = !item.completed;
      render();
    })

    li.querySelector('.todo-remove').addEventListener('click', function () {
      toDoData.splice(index, 1);
      render();
    })
  })
}

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value === '') return;
  const newToDo = {
    text: headerInput.value,
    completed: false
  }

  toDoData.push(newToDo);
  headerInput.value = '';

  render();
})
