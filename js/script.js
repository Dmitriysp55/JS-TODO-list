


//////////// конструкторы //////

// переменные


/// создание записи продукта

function createTask(){
	var taskStatusNode = '<input type="checkbox" name="" value="">'
	var taskProductName = document.getElementById('product-name').value;  //localStorage.getItem('product');
	var taskQuantity = document.getElementById('product-qnt').value;   // localStorage.getItem('quantity');
	var taskModifyButton = '<button id="btn-edit" onclick="editTask(this);" type="button" name="button">&#9997;</button>';
	var taskApplyButton = '<button id="btn-apply" type="button" name="button">&#10004;</button>';
	var taskDeleteButton = '<button id="btn-delete" onclick="deleteTask(this);" type="button" name="button">&#10006;</button>';

	if (taskProductName == "" && taskQuantity == ""){
	return;
	} else{
	var tr = document.createElement('tr');
	tr.setAttribute("class", "active");


	var td = document.createElement('td');
	td.innerHTML = taskStatusNode;
	td.setAttribute("onclick", "endTask(this)")
	tr.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = taskProductName;
	tr.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = taskQuantity;
	tr.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = taskModifyButton + taskDeleteButton;
	tr.appendChild(td);

document.getElementById('task-table-body').appendChild(tr);
}
}


/// сохранение данных
function saveData(){
	var product = document.getElementById('product-name').value;
	var quantity = document.getElementById('product-qnt').value;

	localStorage.setItem('product', product);
	localStorage.setItem('quantity', quantity);

	document.getElementById('product-name').value = "";
	document.getElementById('product-qnt').value = "";
}
//////////////////////

function addTask(){
	//	saveData();
		createTask();

			//стирание данных инпута
		document.getElementById('product-name').value = "";
		document.getElementById('product-qnt').value = "";
}

function deleteTask(x){
	var y = x.parentNode.parentNode.rowIndex
    document.getElementById('task-table').deleteRow(y);
	}

function editTask(edit){
			var taskApplyButton = document.createElement('button');
			taskApplyButton.setAttribute("id", "btn-apply");
			taskApplyButton.setAttribute("onclick", "applyTask(this);");
			taskApplyButton.innerHTML = '&#10004;'
			var x = edit.parentNode.parentNode.rowIndex;
			var table = document.getElementById('task-table');
			var cell = table.rows[x].cells[3]

			cell.firstElementChild.remove();
			cell.insertBefore(taskApplyButton, cell.childNodes[0]);

			document.getElementById('task-table').rows[x].cells[1].contentEditable = "true";
			document.getElementById('task-table').rows[x].cells[2].contentEditable = "true";
			document.getElementById('task-table').rows[x].cells[1].style.backgroundColor = "white";
			document.getElementById('task-table').rows[x].cells[2].style.backgroundColor = "white";
			document.getElementById('task-table').rows[x].cells[1].focus();
		}

function applyTask(taskApply){
			var x = taskApply.parentNode.parentNode.rowIndex;
			var taskModifyButton = document.createElement('button');
			taskModifyButton.setAttribute("id", "btn-edit");
			taskModifyButton.setAttribute("onclick", "editTask(this)");
			taskModifyButton.innerHTML = '&#9997;'
			var table = document.getElementById('task-table');
			var cell = table.rows[x].cells[3]
			cell.firstElementChild.remove();
			cell.insertBefore(taskModifyButton, cell.childNodes[0]);

	document.getElementById('task-table').rows[x].cells[1].contentEditable = "false";
	document.getElementById('task-table').rows[x].cells[2].contentEditable = "false";
				document.getElementById('task-table').rows[x].cells[1].style.backgroundColor = "";
			document.getElementById('task-table').rows[x].cells[2].style.backgroundColor = "";
	}

function endTask(e){
		var x = e.parentNode.rowIndex;
		document.getElementById('task-table').rows[x].setAttribute('class', 'success')
		e.firstChild.setAttribute('disabled','');
		document.getElementById('task-table').rows[x].cells[3].firstChild.setAttribute('disabled','');
		document.getElementById('task-table').rows[x].cells[1].style.textDecoration = 'line-through';
		document.getElementById('task-table').rows[x].cells[2].style.textDecoration = 'line-through';

		}

