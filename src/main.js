import { createIcons, Plus, Search, Sun, Moon, SlidersHorizontal, Check, Pencil, Trash2, X, Inbox, CircleCheck, CircleDashed, Sparkles, ClipboardCheck, RotateCcw } from 'lucide';
import './style.css';

const STORAGE_KEY = 'todo-studio.todos';
const THEME_KEY = 'todo-studio.theme';

const state = {
  todos: loadTodos(),
  filter: 'all',
  sort: 'newest',
  search: '',
  editingId: null,
  theme: loadTheme()
};

const app = document.querySelector('#app');

function loadTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
}

function saveTheme() {
  localStorage.setItem(THEME_KEY, state.theme);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[character]));
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(timestamp);
}

function getVisibleTodos() {
  const query = state.search.trim().toLowerCase();
  const filtered = state.todos.filter((todo) => {
    const matchesFilter = state.filter === 'all' || (state.filter === 'active' && !todo.completed) || (state.filter === 'completed' && todo.completed);
    return matchesFilter && (!query || todo.title.toLowerCase().includes(query));
  });

  return filtered.sort((first, second) => {
    if (state.sort === 'oldest') return first.createdAt - second.createdAt;
    if (state.sort === 'completed') return Number(second.completed) - Number(first.completed) || second.createdAt - first.createdAt;
    if (state.sort === 'pending') return Number(first.completed) - Number(second.completed) || second.createdAt - first.createdAt;
    return second.createdAt - first.createdAt;
  });
}

function render() {
  const total = state.todos.length;
  const completed = state.todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const visibleTodos = getVisibleTodos();
  const completionRate = total ? Math.round((completed / total) * 100) : 0;
  const editingTodo = state.todos.find((todo) => todo.id === state.editingId);

  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#" aria-label="Todo Studio home">
          <span class="brand-mark"><i data-lucide="clipboard-check"></i></span>
          <span>Todo Studio</span>
        </a>
        <div class="topbar-actions">
          <span class="date-label">${new Intl.DateTimeFormat('en', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date())}</span>
          <button class="icon-button" id="theme-toggle" aria-label="Switch to ${state.theme === 'light' ? 'dark' : 'light'} mode" title="Toggle theme">
            <i data-lucide="${state.theme === 'light' ? 'moon' : 'sun'}"></i>
          </button>
        </div>
      </header>

      <main class="workspace">
        <section class="intro-row">
          <div>
            <p class="eyebrow"><span class="eyebrow-dot"></span> Your personal command center</p>
            <h1>Make space for<br /><em>what matters.</em></h1>
            <p class="intro-copy">A focused place for the small steps that move your day forward.</p>
          </div>
          <div class="progress-card">
            <div class="progress-card-top"><span>Today's progress</span><strong>${completionRate}%</strong></div>
            <div class="progress-track"><span style="width: ${completionRate}%"></span></div>
            <p>${completed} of ${total} ${total === 1 ? 'task' : 'tasks'} complete</p>
          </div>
        </section>

        <section class="stats-grid" aria-label="Todo statistics">
          <div class="stat-card stat-total"><span class="stat-icon"><i data-lucide="inbox"></i></span><div><strong>${total}</strong><span>Total tasks</span></div></div>
          <div class="stat-card stat-pending"><span class="stat-icon"><i data-lucide="circle-dashed"></i></span><div><strong>${pending}</strong><span>In progress</span></div></div>
          <div class="stat-card stat-completed"><span class="stat-icon"><i data-lucide="circle-check"></i></span><div><strong>${completed}</strong><span>Completed</span></div></div>
        </section>

        <section class="todo-panel">
          <div class="panel-heading">
            <div><p class="section-kicker">Your list</p><h2>All the things</h2></div>
            <span class="task-count">${total} ${total === 1 ? 'task' : 'tasks'}</span>
          </div>

          <form class="todo-form" id="todo-form" novalidate>
            <div class="input-wrap ${editingTodo ? 'is-editing' : ''}">
              <i data-lucide="${editingTodo ? 'pencil' : 'plus'}"></i>
              <input id="todo-input" name="title" type="text" maxlength="120" value="${editingTodo ? escapeHtml(editingTodo.title) : ''}" placeholder="${editingTodo ? 'Update your task...' : 'What needs to get done?'}" autocomplete="off" />
              ${editingTodo ? '<button class="clear-input" type="button" id="cancel-edit" aria-label="Cancel editing"><i data-lucide="x"></i></button>' : ''}
            </div>
            <button class="primary-button" type="submit"><i data-lucide="${editingTodo ? 'check' : 'plus'}"></i>${editingTodo ? 'Save task' : 'Add task'}</button>
            <p class="form-error" id="form-error" role="alert"></p>
          </form>

          <div class="toolbar">
            <div class="filter-tabs" role="tablist" aria-label="Filter tasks">
              ${['all', 'active', 'completed'].map((filter) => `<button class="filter-tab ${state.filter === filter ? 'active' : ''}" data-filter="${filter}" role="tab" aria-selected="${state.filter === filter}">${filter[0].toUpperCase() + filter.slice(1)} <span>${filter === 'all' ? total : filter === 'active' ? pending : completed}</span></button>`).join('')}
            </div>
            <div class="toolbar-actions">
              <label class="search-box"><i data-lucide="search"></i><input id="search-input" type="search" value="${escapeHtml(state.search)}" placeholder="Search tasks..." aria-label="Search tasks" /></label>
              <label class="sort-select"><i data-lucide="sliders-horizontal"></i><select id="sort-select" aria-label="Sort tasks"><option value="newest" ${state.sort === 'newest' ? 'selected' : ''}>Newest first</option><option value="oldest" ${state.sort === 'oldest' ? 'selected' : ''}>Oldest first</option><option value="completed" ${state.sort === 'completed' ? 'selected' : ''}>Completed first</option><option value="pending" ${state.sort === 'pending' ? 'selected' : ''}>Pending first</option></select></label>
            </div>
          </div>

          <div class="list-area">
            ${renderTodoList(visibleTodos)}
          </div>

          ${completed > 0 ? `<div class="panel-footer"><span>${completed} completed ${completed === 1 ? 'task' : 'tasks'} ready to clear</span><button class="text-button" id="clear-completed"><i data-lucide="rotate-ccw"></i>Clear completed</button></div>` : ''}
        </section>

        <footer class="app-footer"><span><i data-lucide="sparkles"></i> Keep it simple. Keep moving.</span><span>Saved automatically</span></footer>
      </main>
    </div>
  `;

  createIcons({ icons: { Plus, Search, Sun, Moon, SlidersHorizontal, Check, Pencil, Trash2, X, Inbox, CircleCheck, CircleDashed, Sparkles, ClipboardCheck, RotateCcw } });
  bindEvents();
}

function renderTodoList(todos) {
  if (!state.todos.length) {
    return `<div class="empty-state"><div class="empty-illustration"><i data-lucide="sparkles"></i></div><h3>Your list is a blank page.</h3><p>Add your first task above and give your day a little direction.</p></div>`;
  }
  if (!todos.length) {
    return `<div class="empty-state"><div class="empty-illustration muted"><i data-lucide="search"></i></div><h3>No tasks found.</h3><p>Try a different search or filter to find what you are looking for.</p></div>`;
  }
  return `<div class="todo-list">${todos.map((todo, index) => `
    <article class="todo-item ${todo.completed ? 'completed' : ''}" style="--item-index: ${index}">
      <button class="check-button" data-action="toggle" data-id="${todo.id}" aria-label="Mark ${todo.completed ? 'pending' : 'completed'}: ${escapeHtml(todo.title)}"><span><i data-lucide="check"></i></span></button>
      <div class="todo-content"><p>${escapeHtml(todo.title)}</p><span>Added ${formatDate(todo.createdAt)}</span></div>
      <div class="todo-actions"><button class="item-action edit" data-action="edit" data-id="${todo.id}" aria-label="Edit ${escapeHtml(todo.title)}" title="Edit task"><i data-lucide="pencil"></i></button><button class="item-action delete" data-action="delete" data-id="${todo.id}" aria-label="Delete ${escapeHtml(todo.title)}" title="Delete task"><i data-lucide="trash-2"></i></button></div>
    </article>`).join('')}</div>`;
}

function bindEvents() {
  document.querySelector('#theme-toggle').addEventListener('click', () => { state.theme = state.theme === 'light' ? 'dark' : 'light'; saveTheme(); render(); });
  document.querySelector('#todo-form').addEventListener('submit', handleSubmit);
  document.querySelector('#search-input').addEventListener('input', (event) => { state.search = event.target.value; render(); focusSearch(); });
  document.querySelector('#sort-select').addEventListener('change', (event) => { state.sort = event.target.value; render(); });
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { state.filter = button.dataset.filter; render(); }));
  document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => handleAction(button.dataset.action, button.dataset.id)));
  document.querySelector('#clear-completed')?.addEventListener('click', clearCompleted);
  document.querySelector('#cancel-edit')?.addEventListener('click', () => { state.editingId = null; render(); });
}

function focusSearch() {
  const searchInput = document.querySelector('#search-input');
  searchInput.focus();
  searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector('#todo-input');
  const error = document.querySelector('#form-error');
  const title = input.value.trim();

  if (!title) {
    error.textContent = 'Please enter a task before adding it.';
    input.classList.add('has-error');
    input.focus();
    return;
  }

  const duplicate = state.todos.some((todo) => todo.title.toLowerCase() === title.toLowerCase() && todo.id !== state.editingId);
  if (duplicate) {
    error.textContent = 'That task is already on your list.';
    input.classList.add('has-error');
    input.focus();
    return;
  }

  if (state.editingId) {
    state.todos = state.todos.map((todo) => todo.id === state.editingId ? { ...todo, title } : todo);
    state.editingId = null;
  } else {
    state.todos.unshift({ id: crypto.randomUUID(), title, completed: false, createdAt: Date.now() });
  }
  saveTodos();
  render();
}

function handleAction(action, id) {
  const todo = state.todos.find((item) => item.id === id);
  if (!todo) return;
  if (action === 'toggle') {
    todo.completed = !todo.completed;
  } else if (action === 'edit') {
    state.editingId = id;
    render();
    document.querySelector('#todo-input')?.focus();
    return;
  } else if (action === 'delete') {
    if (!window.confirm(`Delete “${todo.title}”? This cannot be undone.`)) return;
    state.todos = state.todos.filter((item) => item.id !== id);
    if (state.editingId === id) state.editingId = null;
  }
  saveTodos();
  render();
}

function clearCompleted() {
  if (!window.confirm('Clear all completed tasks? This cannot be undone.')) return;
  state.todos = state.todos.filter((todo) => !todo.completed);
  saveTodos();
  render();
}

render();
