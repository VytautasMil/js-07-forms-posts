'use strict';
console.log('main.js');

const createFormEl = document.forms[0];
const titleEl = document.getElementById('title');
const imageEl = document.getElementById('image');
const dateEl = document.getElementById('date');
const authorEl = document.getElementById('author');
const bodyEl = document.getElementById('body');
const postsContainerEl = document.querySelector('.posts-container');

const postsArrJsonVersion = localStorage.getItem('postsArr');
console.log('postsArrJsonVersion ===', postsArrJsonVersion);
// JSON.parse() - pavercia is Json i javascript
// jei localStorage nera issaugota arba istrinta postsArr tada nustatom postsArr = []
const postsArr = postsArrJsonVersion === null ? [] : JSON.parse(postsArrJsonVersion);

render();

createFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('Js is in control');
  const newPostObj = {
    title: titleEl.value,
    image: imageEl.value,
    date: dateEl.value,
    author: authorEl.querySelector(':checked').textContent,
    body: bodyEl.value,
  };
  console.log('newPostObj ===', newPostObj);
  // makePostToHtml(newPostObj, postsContainerEl);
  postsArr.push(newPostObj);
  render();
  createFormEl.reset();
});

function makePostToHtml(post, dest) {
  const artEl = document.createElement('div');
  artEl.className = 'post card';
  artEl.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h3 class="post__title">${post.title}</h3>
    <h4 class="post__author">Autorius: ${post.author}</h4>
    <p class="post__date">${post.date}</p>
    <p class="post__text">${post.body}</p>
  `;
  dest.append(artEl);
}

function render() {
  // isvalyti containeri
  postsContainerEl.innerHTML = '';
  // irasyti i localStorage
  localStorage.setItem('postsArr', JSON.stringify(postsArr));
  for (let i = 0; i < postsArr.length; i++) {
    makePostToHtml(postsArr[i], postsContainerEl);
  }
}

// loclasstorage
// localStorage.setItem('postsArr', 'something something');

// const postsArrFromLocalStorage = localStorage.getItem('postsArr');
// console.log('postsArrFromLocalStorage ===', postsArrFromLocalStorage);