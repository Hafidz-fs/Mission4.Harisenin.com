// --- TIME ---
function updateTime(){
  const now = new Date();
  document.getElementById('time').innerText = now.toLocaleString('id-ID',{
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });
}
setInterval(updateTime,1000);
updateTime();

// --- ELEMENTS ---
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('priority');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const submitBtn = document.getElementById('submitBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const nows = new Date().toLocaleString('id-ID', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});


// --- ADD TASK ---
submitBtn.addEventListener('click', function(){
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  if(!text) return;

  const li = document.createElement('li');
  const left = document.createElement('div');
  left.className = 'left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('div');
  label.innerHTML = `
  <div class="task-date">${nows}</div>
  <div>
    <strong>${text}</strong> <span class='meta'>(${priority})</span> 
  </div>`;

  checkbox.addEventListener('change', function(){
    if(this.checked){
      label.classList.add('strike');
    } else {
      label.classList.remove('strike');
    }
      moveToDone(text, priority,nows);
  });


  const del = document.createElement('button');
  del.innerText = 'Delete';
  del.addEventListener('click', () => li.remove());

  left.appendChild(checkbox);
  left.appendChild(label);

  li.appendChild(left);
  li.appendChild(del);

  todoList.appendChild(li);
  taskInput.value = '';
});

// --- 
function moveToDone(text, priority,nows){
  const li = document.createElement('li');
  li.innerHTML =  `
  <div class="task-date">${nows}</div>
  <div>
    <strong>${text}</strong> <span class='meta'>(${priority})</span> 
  </div>`;
  doneList.appendChild(li);
}

// --- DELETE ALL ---
deleteAllBtn.addEventListener('click', function(){
  todoList.innerHTML = '';
  doneList.innerHTML = '';
});
