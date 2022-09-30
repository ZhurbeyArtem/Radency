import { images } from './images.js';

let notes = [
  {
    id: 1,
    img: '',
    name: `shopping List 1`,
    creationDate: '2021-11-20',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '3/5/2021',
    archived: false,
  },
  {
    id: 2,
    img: '',
    name: 'shopping List 2',
    creationDate: '2021-02-10',
    category: 'Task',
    content: 'Phone, Tv 3/5/2021',
    dates: '3/5/2021',
    archived: false,
  },
  {
    id: 3,
    img: '',
    name: 'shopping List 3',
    creationDate: '2021-04-20',
    category: 'Idea',
    content: 'Tomatoes, bread, milk',
    dates: '3/5/2021',
    archived: true,
  },
  {
    id: 4,
    img: '',
    name: 'shopping List 4',
    creationDate: '2021-04-20',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '3/5/2021',
    archived: false,
  },
  {
    id: 5,
    img: '',
    name: 'shopping List 5',
    creationDate: '2018-12-10',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '3/5/2021',
    archived: false,
  },
  {
    id: 6,
    img: '',
    name: 'shopping list 6',
    creationDate: '2021-04-20',
    category: 'Random-Thought',
    content: 'Tomatoes, bread',
    dates: '3/5/2021',
    archived: true,
  },
];

const dateRegEx = /^(0?[1-9]|1[012])[ /](0?[1-9]|[12][0-9]|3[01])[ /](19|20)?[0-9]{2}$/; //3/5/2021, 11/5/2021, 2/1/1991
export const findDates = (value) => {
  let text = value.split(' ');
  const dates = text.map((str) => str.replace(',', '')).filter((str) => str.match(dateRegEx));
  return dates.join(', ');
};

//return notes obj
export const getNotes = () => notes;

//create new note
export const addNewNote = (newNote) => (notes = [...notes, newNote]);
export const makeNewNoteObj = (form, noteId) => ({
  id: noteId || Date.now(),
  img: images.filter((img) => img.imgName === form.elements[2].value)[0]?.imgUrl || ' ',
  name: form.elements[0].value,
  creationDate: form.elements[1].value,
  category: form.elements[2].value,
  content: form.elements[3].value,
  dates: findDates(form.elements[3].value),
  archived: false,
});

//edit, archive, delete
export const editNoteData = (editNote) => {
  notes.map((note) => {
    if (note.id === editNote.id) {
      Object.assign(note, editNote);
    }
  });
};
export const archiveNote = (arhiveId) =>
  notes.map((note) => (note.id === arhiveId ? (note.archived = true) : false));

export const deleteNoteData = (delId) => (notes = [...notes.filter((el) => el.id !== delId)]);

// Delete/archive all notes
export const archiveAllNotes = () => notes.map((note) => (note.archived = true));
export const deleteAllNotes = () => (notes = []);

//calculate sumTable
export const calculateActive = (category) =>
  notes.reduce(
    (acc, note) => (note.category === category && note.archived === false ? acc + 1 : acc),
    0,
  );
export const calculateArchived = (category) =>
  notes.reduce(
    (acc, note) => (note.category === category && note.archived === true ? acc + 1 : acc),
    0,
  );

(() =>
  notes.map(
    (note) =>
      (note.img = images.filter((imgObj) => imgObj.imgName === note.category)[0]?.imgUrl || ' '),
  ))();

export default notes;
