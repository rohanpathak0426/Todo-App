(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(e,t,a=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(s=>{i.setAttribute(s,String(t[s]))}),a.length&&a.forEach(s=>{const n=g(...s);i.appendChild(n)}),i};var S=([e,t,a])=>g(e,t,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),M=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",E=e=>e.flatMap(M).map(a=>a.trim()).filter(Boolean).filter((a,i,s)=>s.indexOf(a)===i).join(" "),C=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,i)=>a.toUpperCase()+i.toLowerCase()),v=(e,{nameAttr:t,icons:a,attrs:i})=>{var f;const s=e.getAttribute(t);if(s==null)return;const n=C(s),r=a[n];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const u=x(e),[w,k,$]=r,m={...k,"data-lucide":s,...i,...u},h=E(["lucide",`lucide-${s}`,u,i]);h&&Object.assign(m,{class:h});const A=S([w,m,$]);return(f=e.parentNode)==null?void 0:f.replaceChild(A,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=["svg",l,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",l,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",l,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",l,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=["svg",l,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",l,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=["svg",l,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",l,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",l,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=["svg",l,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",l,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",l,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",l,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",l,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",l,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(s=>v(s,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(n=>v(n,{nameAttr:"icon-name",icons:e,attrs:a})))}},y="todo-studio.todos",b="todo-studio.theme",o={todos:_(),filter:"all",sort:"newest",search:"",editingId:null,theme:B()},V=document.querySelector("#app");function _(){try{const e=JSON.parse(localStorage.getItem(y));return Array.isArray(e)?e:[]}catch{return[]}}function B(){return localStorage.getItem(b)==="dark"?"dark":"light"}function p(){localStorage.setItem(y,JSON.stringify(o.todos))}function J(){localStorage.setItem(b,o.theme)}function d(e){return e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"})[t])}function G(e){return new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(e)}function W(){const e=o.search.trim().toLowerCase();return o.todos.filter(a=>(o.filter==="all"||o.filter==="active"&&!a.completed||o.filter==="completed"&&a.completed)&&(!e||a.title.toLowerCase().includes(e))).sort((a,i)=>o.sort==="oldest"?a.createdAt-i.createdAt:o.sort==="completed"?Number(i.completed)-Number(a.completed)||i.createdAt-a.createdAt:o.sort==="pending"&&Number(a.completed)-Number(i.completed)||i.createdAt-a.createdAt)}function c(){const e=o.todos.length,t=o.todos.filter(r=>r.completed).length,a=e-t,i=W(),s=e?Math.round(t/e*100):0,n=o.todos.find(r=>r.id===o.editingId);document.documentElement.dataset.theme=o.theme,V.innerHTML=`
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#" aria-label="Todo Studio home">
          <span class="brand-mark"><i data-lucide="clipboard-check"></i></span>
          <span>Todo Studio</span>
        </a>
        <div class="topbar-actions">
          <span class="date-label">${new Intl.DateTimeFormat("en",{weekday:"long",month:"short",day:"numeric"}).format(new Date)}</span>
          <button class="icon-button" id="theme-toggle" aria-label="Switch to ${o.theme==="light"?"dark":"light"} mode" title="Toggle theme">
            <i data-lucide="${o.theme==="light"?"moon":"sun"}"></i>
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
            <div class="progress-card-top"><span>Today's progress</span><strong>${s}%</strong></div>
            <div class="progress-track"><span style="width: ${s}%"></span></div>
            <p>${t} of ${e} ${e===1?"task":"tasks"} complete</p>
          </div>
        </section>

        <section class="stats-grid" aria-label="Todo statistics">
          <div class="stat-card stat-total"><span class="stat-icon"><i data-lucide="inbox"></i></span><div><strong>${e}</strong><span>Total tasks</span></div></div>
          <div class="stat-card stat-pending"><span class="stat-icon"><i data-lucide="circle-dashed"></i></span><div><strong>${a}</strong><span>In progress</span></div></div>
          <div class="stat-card stat-completed"><span class="stat-icon"><i data-lucide="circle-check"></i></span><div><strong>${t}</strong><span>Completed</span></div></div>
        </section>

        <section class="todo-panel">
          <div class="panel-heading">
            <div><p class="section-kicker">Your list</p><h2>All the things</h2></div>
            <span class="task-count">${e} ${e===1?"task":"tasks"}</span>
          </div>

          <form class="todo-form" id="todo-form" novalidate>
            <div class="input-wrap ${n?"is-editing":""}">
              <i data-lucide="${n?"pencil":"plus"}"></i>
              <input id="todo-input" name="title" type="text" maxlength="120" value="${n?d(n.title):""}" placeholder="${n?"Update your task...":"What needs to get done?"}" autocomplete="off" />
              ${n?'<button class="clear-input" type="button" id="cancel-edit" aria-label="Cancel editing"><i data-lucide="x"></i></button>':""}
            </div>
            <button class="primary-button" type="submit"><i data-lucide="${n?"check":"plus"}"></i>${n?"Save task":"Add task"}</button>
            <p class="form-error" id="form-error" role="alert"></p>
          </form>

          <div class="toolbar">
            <div class="filter-tabs" role="tablist" aria-label="Filter tasks">
              ${["all","active","completed"].map(r=>`<button class="filter-tab ${o.filter===r?"active":""}" data-filter="${r}" role="tab" aria-selected="${o.filter===r}">${r[0].toUpperCase()+r.slice(1)} <span>${r==="all"?e:r==="active"?a:t}</span></button>`).join("")}
            </div>
            <div class="toolbar-actions">
              <label class="search-box"><i data-lucide="search"></i><input id="search-input" type="search" value="${d(o.search)}" placeholder="Search tasks..." aria-label="Search tasks" /></label>
              <label class="sort-select"><i data-lucide="sliders-horizontal"></i><select id="sort-select" aria-label="Sort tasks"><option value="newest" ${o.sort==="newest"?"selected":""}>Newest first</option><option value="oldest" ${o.sort==="oldest"?"selected":""}>Oldest first</option><option value="completed" ${o.sort==="completed"?"selected":""}>Completed first</option><option value="pending" ${o.sort==="pending"?"selected":""}>Pending first</option></select></label>
            </div>
          </div>

          <div class="list-area">
            ${X(i)}
          </div>

          ${t>0?`<div class="panel-footer"><span>${t} completed ${t===1?"task":"tasks"} ready to clear</span><button class="text-button" id="clear-completed"><i data-lucide="rotate-ccw"></i>Clear completed</button></div>`:""}
        </section>

        <footer class="app-footer"><span><i data-lucide="sparkles"></i> Keep it simple. Keep moving.</span><span>Saved automatically</span></footer>
      </main>
    </div>
  `,Y({icons:{Plus:P,Search:H,Sun:K,Moon:O,SlidersHorizontal:F,Check:L,Pencil:D,Trash2:R,X:U,Inbox:q,CircleCheck:T,CircleDashed:I,Sparkles:z,ClipboardCheck:N,RotateCcw:j}}),Z()}function X(e){return o.todos.length?e.length?`<div class="todo-list">${e.map((t,a)=>`
    <article class="todo-item ${t.completed?"completed":""}" style="--item-index: ${a}">
      <button class="check-button" data-action="toggle" data-id="${t.id}" aria-label="Mark ${t.completed?"pending":"completed"}: ${d(t.title)}"><span><i data-lucide="check"></i></span></button>
      <div class="todo-content"><p>${d(t.title)}</p><span>Added ${G(t.createdAt)}</span></div>
      <div class="todo-actions"><button class="item-action edit" data-action="edit" data-id="${t.id}" aria-label="Edit ${d(t.title)}" title="Edit task"><i data-lucide="pencil"></i></button><button class="item-action delete" data-action="delete" data-id="${t.id}" aria-label="Delete ${d(t.title)}" title="Delete task"><i data-lucide="trash-2"></i></button></div>
    </article>`).join("")}</div>`:'<div class="empty-state"><div class="empty-illustration muted"><i data-lucide="search"></i></div><h3>No tasks found.</h3><p>Try a different search or filter to find what you are looking for.</p></div>':'<div class="empty-state"><div class="empty-illustration"><i data-lucide="sparkles"></i></div><h3>Your list is a blank page.</h3><p>Add your first task above and give your day a little direction.</p></div>'}function Z(){var e,t;document.querySelector("#theme-toggle").addEventListener("click",()=>{o.theme=o.theme==="light"?"dark":"light",J(),c()}),document.querySelector("#todo-form").addEventListener("submit",ee),document.querySelector("#search-input").addEventListener("input",a=>{o.search=a.target.value,c(),Q()}),document.querySelector("#sort-select").addEventListener("change",a=>{o.sort=a.target.value,c()}),document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>{o.filter=a.dataset.filter,c()})),document.querySelectorAll("[data-action]").forEach(a=>a.addEventListener("click",()=>te(a.dataset.action,a.dataset.id))),(e=document.querySelector("#clear-completed"))==null||e.addEventListener("click",ae),(t=document.querySelector("#cancel-edit"))==null||t.addEventListener("click",()=>{o.editingId=null,c()})}function Q(){const e=document.querySelector("#search-input");e.focus(),e.setSelectionRange(e.value.length,e.value.length)}function ee(e){e.preventDefault();const t=document.querySelector("#todo-input"),a=document.querySelector("#form-error"),i=t.value.trim();if(!i){a.textContent="Please enter a task before adding it.",t.classList.add("has-error"),t.focus();return}if(o.todos.some(n=>n.title.toLowerCase()===i.toLowerCase()&&n.id!==o.editingId)){a.textContent="That task is already on your list.",t.classList.add("has-error"),t.focus();return}o.editingId?(o.todos=o.todos.map(n=>n.id===o.editingId?{...n,title:i}:n),o.editingId=null):o.todos.unshift({id:crypto.randomUUID(),title:i,completed:!1,createdAt:Date.now()}),p(),c()}function te(e,t){var i;const a=o.todos.find(s=>s.id===t);if(a){if(e==="toggle")a.completed=!a.completed;else if(e==="edit"){o.editingId=t,c(),(i=document.querySelector("#todo-input"))==null||i.focus();return}else if(e==="delete"){if(!window.confirm(`Delete “${a.title}”? This cannot be undone.`))return;o.todos=o.todos.filter(s=>s.id!==t),o.editingId===t&&(o.editingId=null)}p(),c()}}function ae(){window.confirm("Clear all completed tasks? This cannot be undone.")&&(o.todos=o.todos.filter(e=>!e.completed),p(),c())}c();
