const displaySection = document.querySelector('.view-notes');
const note = document.querySelector('#note-input');
const button = document.querySelector('.btn');
const form = document.getElementById('note-form');


const tasks = JSON.parse(localStorage.getItem("notes")) || [];

const addNote = (todo) => {

  tasks.push(todo);

  localStorage.setItem("notes", JSON.stringify(tasks));

  return todo;
}

const displayElement = (todo) => {

  const displayNote = document.createElement('div');
  displayNote.classList.add('note');
  displayNote.innerText = todo;
  displaySection.appendChild(displayNote);

}

tasks.forEach(displayElement);

form.onsubmit = e => {

  e.preventDefault();

  const newTask = addNote(note.value);
  displayElement(newTask);

  note.value = '';
}


// form.addEventListener('submit', (e) => {

//   e.preventDefault()

//   const newTask = addNote(note.value);
//   displayElement(newTask);

//   note.value = '';

// })