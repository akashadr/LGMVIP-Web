//jshint esversion: 6

window.addEventListener('load', () => {
	const form = document.querySelector("#TaskForm");
	const input = document.querySelector("#TaskInput");
	const list = document.querySelector("#Tasks");
    var Count = 0;

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (task==="") {
            alert("Please Enter Valid Task")
        } 
		
		else{ 

		Count = Count +1;

		document.getElementById('T').innerHTML = "Tasks: " + Count;

		const TaskList = document.createElement('div');
		TaskList.classList.add('task');

		const Task_Content = document.createElement('div');
		Task_Content.classList.add('content');

		TaskList.appendChild(Task_Content);

		const Task_Input = document.createElement('input');
		Task_Input.classList.add('text');
		Task_Input.type = 'text';
		Task_Input.value = task;
		Task_Input.setAttribute('readonly', 'readonly');

		Task_Content.appendChild(Task_Input);

		const Task_Actions = document.createElement('div');
		Task_Actions.classList.add('actions');

		const Task_Edit = document.createElement('button');
		Task_Edit.classList.add('edit');
		Task_Edit.innerText = 'Edit';

		const Task_Delete = document.createElement('button');
		Task_Delete.classList.add('delete');
		Task_Delete.innerText = 'Delete';

		Task_Actions.appendChild(Task_Edit);
		Task_Actions.appendChild(Task_Delete);

		TaskList.appendChild(Task_Actions);

		list.appendChild(TaskList);

		input.value = '';

		Task_Edit.addEventListener('click', (e) => {
			if (Task_Edit.innerText.toLowerCase() == "edit") {
				Task_Edit.innerText = "Save";
				Task_Input.removeAttribute("readonly");
				Task_Input.focus();
			} else {
				Task_Edit.innerText = "Edit";
				Task_Input.setAttribute("readonly", "readonly");
			}
		});

		Task_Delete.addEventListener('click', (e) => {
			list.removeChild(TaskList);
            Count = Count - 1;
			document.getElementById('T').innerHTML = "Tasks: " + Count;
		});
	}
	});
});
