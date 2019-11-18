//--------------------------------------------
//clickEvents.js  Here We going to drive clicks events of the notebooks 
//--------------------------------------------


//--------------------------------------------
//BUTTONS_NAMES are the keys that all maintoolbar-container with their button's names
//--------------------------------------------
const BUTTONS_NAMES = {
	"jupyter-notebook:save-notebook": "save-and-checkpoint",
	"jupyter-notebook:insert-cell-below": "insert-cell-below",
	"jupyter-notebook:cut-cell": "cut-selected-cells",
	"jupyter-notebook:copy-cell": "copy-selected-cells",
	"jupyter-notebook:paste-cell-below": "paste-cells-below",
    "jupyter-notebook:move-cell-up": "move-selected-cells-up",
    "jupyter-notebook:move-cell-down": "move-selected-cells-down",
	"jupyter-notebook:run-cell-and-select-next": "run",
	"jupyter-notebook:interrupt-kernel": "interrupt-the-kernel",
	"jupyter-notebook:confirm-restart-kernel": "restart-the-kernel",
	"jupyter-notebook:confirm-restart-kernel-and-run-all-cells": "restart-the-kernel-and-run-all-cells",
	"jupyter-notebook:show-command-palette": "open-the-command-palette",

}

const URL = 'https://us-central1-statistics-notebooks-jup-56311.cloudfunctions.net/showMessage';

async function postData(data = {}) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json(); 
}

//--------------------------------------------
//'showEventClickButton' function show in console what button was clicked
//--------------------------------------------

const showEventClickButton = async (nameButton) => {
	//console.log('you clicked '+ BUTTONS_NAMES[nameButton]);
	let date = new Date();
	let data = {
		"userId": 12345,
		"date": date,
		"event": "click button",
		"metadata":{
			"projectName": "jupyter-notebooks",
			"filename": "notebook-of-example",
			"hackId": 12345,
			"buttonClicked":BUTTONS_NAMES[nameButton]
		}
	}
	try {
	  const response = await postData(data);
	  console.log(JSON.stringify(response)); // JSON-string from `response.json()` call
	} catch (error) {
	  console.error(error);
	}
}

//--------------------------------------------
//'showInfoCellRunning' function show information about Cell Running
//--------------------------------------------
const showInfoCellRunning = async (cell) => {
	// console.log('This Cell is Running');
	// console.log(cell);
	let date = new Date();
	let data = {
		"userId": 12345,
		"date": date,
		"event": "cell running",
		"metadata":{
			"projectName": "jupyter-notebooks",
			"filename": "notebook-of-example",
			"hackId": 12345,
			"cellContent":cell
		}
	}
	try {
	  const response = await postData(data);
	  console.log(JSON.stringify(response)); // JSON-string from `response.json()` call
	} catch (error) {
	  console.error(error);
	}
}

//--------------------------------------------
//'showInfoCellFocusing' function show information about Cell Focusing
//--------------------------------------------
const showInfoCellFocusing = async (cell) => {
	// console.log('This Cell is Focusing');
	// console.log(cell);
	
	let date = new Date();
	let data = {
		"userId": 12345,
		"date": date,
		"event": "cell focusing",
		"metadata":{
			"projectName": "jupyter-notebooks",
			"filename": "notebook-of-example",
			"hackId": 12345,
			"cellContent":cell
		}
	}
	try {
	  const response = await postData(data);
	  console.log(JSON.stringify(response)); // JSON-string from `response.json()` call
	} catch (error) {
	  console.error(error);
	}
}

