/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */

class BookCollection {
  constructor() {
    this.i = 0;
    this.form = document.querySelector('.addBooks');
    this.bookList = document.getElementById('booksList');
    this.submit = document.getElementById('addBooks');
    this.collection = [];
    window.addEventListener('DOMContentLoaded', this.init);
    this.form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this.addBooks(ev);
    });
  }

  listBooks = (books) => `
    <li class="book"><p class="book-title">"${books.title}" by ${books.author}</p> <button id='${books.id}' class="remove-btn btn">Remove</button>`;

  setItemFunc = () => {
    localStorage.setItem('BooksList', JSON.stringify(this.collection));
    this.bookList.innerHTML = `${this.collection.map(this.listBooks).join('')}`;
  };

  removeBook = (e) => {
    const buttonId = e.target.id;
    this.collection = this.collection.filter((y) => y !== this.collection[this.collection.findIndex((x) => x.id === parseInt(buttonId, 10))]);
    this.setItemFunc();
  };

  removeButtonEventListener = () => {
    this.bookList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        this.removeBook(e);
      }
    });
  };

  addBooks = (e) => {
    e.preventDefault();
    this.i += 1;
    const localBook = {
      id: this.i,
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    this.collection.push(localBook);
    this.setItemFunc();
    this.removeButtonEventListener();
    this.form.reset();
  };

  getBooks = () => {
    const getData = localStorage.getItem('BooksList');
    const data = JSON.parse(getData);
    if (data) {
      books = data;
    }
    bookList.innerHTML = `${books.map(listBooks).join('')}`;
    this.removeButtonEventListener();
  };

  init = () => {
    const dataGet = localStorage.getItem('BooksList');
    const data = JSON.parse(dataGet);
    if (data) {
      this.collection = data;
    }
    this.setItemFunc();
    this.removeButtonEventListener();
  };
}

const bookCol = new BookCollection();
bookCol.listBooks(bookCol.collection);

function Time() {
  const luxonTime = luxon.DateTime.now();
  currentTime.innerHTML = luxonTime.toLocaleString(luxon.DateTime.DATETIME_MED);
}
const myTime = setInterval(Time, 1000);

const firstPage = document.querySelector('#first-page');
const addNewPage = document.querySelector('#addNewBooks');
const contactPage = document.querySelector('.contact');

document.querySelector('#list').addEventListener('click', () => {
  firstPage.classList.remove('hidden');
  addNewPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

document.querySelector('#addNew').addEventListener('click', () => {
  addNewPage.classList.remove('hidden');
  firstPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

document.querySelector('#contact').addEventListener('click', () => {
  contactPage.classList.remove('hidden');
  firstPage.classList.add('hidden');
  addNewPage.classList.add('hidden');
});
