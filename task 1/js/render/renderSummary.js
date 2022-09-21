import { calculateActive, calculateArchived } from '../data/notes.js';

export default function renderSummary() {
  const activeTask = document.querySelector('.active-task');
  const archivedTask = document.querySelector('.archived-task');
  const activeThougth = document.querySelector('.active-thought');
  const archivedThougth = document.querySelector('.archived-thought');
  const activeIdea = document.querySelector('.active-idea');
  const archivedIdea = document.querySelector('.archived-idea');

  activeTask.innerHTML = calculateActive('Task');
  archivedTask.innerHTML = calculateArchived('Task');
  activeThougth.innerHTML = calculateActive('Random Thought');
  archivedThougth.innerHTML = calculateArchived('Random Thought');
  activeIdea.innerHTML = calculateActive('Idea');
  archivedIdea.innerHTML = calculateArchived('Idea');
}
