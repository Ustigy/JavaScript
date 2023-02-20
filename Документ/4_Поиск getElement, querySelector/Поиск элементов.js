// Как найти?…

// Таблицу с id="age-table".
let age_table = window['age-table'];
let table = document.getElementById('age-table');

// Все элементы label внутри этой таблицы (их три).
let label = window['age-table'].querySelectorAll('label');

// Первый td в этой таблице (со словом «Age»).
let td = document.getElementsByTagName('td')[0];

// Форму form с именем name="search".
let form = document.getElementsByName('search');

// Первый input в этой форме.
let input = document.querySelector('input');

// Последний input в этой форме.
let inputs = document.querySelectorAll('input')
inputs[inputs.length - 1];