import renderSummary from '../render/renderSummary.js';
import { getNotes } from '../data/notes.js';
import renderMainTable from '../render/renderMainTable.js';
import { makeNoteItem } from '../data/makeNodeItem.js';

export function updeteArchivedTables(categoryId) {
  const sumTableBody = document.querySelectorAll('tbody.archived-items');

  Array.from(sumTableBody).map((body) =>
    body.id === categoryId && body.classList.contains('open')
      ? closeTable(body)
      : body.id === categoryId && renderArchivedTable(body, getNotes(), categoryId),
  );

  checkOpenClass(sumTableBody);
}

export function renderArchivedTable(body, notes, categoryId) {
  body.innerHTML = '';
  notes.map((note) =>
    note.archived === true && note.category === categoryId
      ? (body.innerHTML += makeNoteItem(note))
      : false,
  );

  addUnArchivedListeners(body, notes);
}

export function addUnArchivedListeners(body, notes) {
  const unArchiveBtn = body.querySelectorAll('button.unArchive');

  Array.from(unArchiveBtn).map((btn) =>
    btn.addEventListener('click', (e) =>
      notes.map((note) => {
        if (note.id === +e.target.parentElement.parentElement.classList[1]) {
          note.archived = false;

          if (body.contains(e.target.parentElement.parentElement)) {
            body.removeChild(e.target.parentElement.parentElement);
            renderMainTable();
            renderSummary();
          }

          if (!body.hasChildNodes()) {
            body.classList.remove('open');
          }
        }
      }),
    ),
  );
}

function closeTable(body) {
  const allArchivedNotes = body.querySelectorAll('tr');

  Array.from(allArchivedNotes).map((note) => {
    body.removeChild(note);
  });
}

function checkOpenClass(sumTableBody) {
  Array.from(sumTableBody).map((body) =>
    body.hasChildNodes() ? body.classList.add('open') : body.classList.remove('open'),
  );
}
