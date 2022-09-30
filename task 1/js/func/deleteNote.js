import renderSummary from '../render/renderSummary.js';
import { deleteNoteData } from '../data/notes.js';

export default function deleteNote(delId, item, tableBody) {
  deleteNoteData(delId);
  tableBody.removeChild(item);
  renderSummary();
}
