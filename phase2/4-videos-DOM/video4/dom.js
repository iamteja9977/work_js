// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);

// textContent disregards styling and displays all within dom object //
// headerTitle.textContent = 'hello';

// InnerText pays attention to styling //
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMNTSBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);

// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'gold';

// for (i in items) {
// 	items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMNTSBYTAGNAME //
// const li = document.getElementsByTagName('li');
// console.log(li);

// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'gold';

// for (i in li) {
// 	li[i].style.backgroundColor = '#f1f1f1';
// }

// QUERYSELECTOR //
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Placeholder';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// QUERYSELECTORALL //

// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// for (i in odd){
// 	odd[i].style.backgroundColor = '#f4f4f4';
// 	even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// const itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes - includes whitespace and linebreaks in returned array
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'gold';

// firstChild - also includes whitespace and linebreaks in returned array
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';

// lastChild - also includes whitespace and linebreaks in returned array
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement
// Create a div
// const newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add class
// newDiv.id = 'hello1';

// Add attribute
// newDiv.setAttribute('title', 'hello div');

// Create text node
// const newDivText = document.createTextNode('hello world');

// Add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');

// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS //

// const button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
	// console.log('Button clicked');
	// document.getElementById('header-title').textContent = 'Changed';
	// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
	
	// console.log(e);
	
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';
	
	// console.log(e.type);
	
	// console.log(e.clientX);
	// console.log(e.clientY);
	
	// console.log(e.offsetX);
	// console.log(e.offsetY);
	
	// console.log(e.altKey + '   altKey');
	// console.log(e.ctrlKey + '   ctrlKey');
	// console.log(e.shiftKey + '   shiftKey');

// }

// const button = document.getElementById('button');
// const box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');
// const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// When clicked inside element //
// itemInput.addEventListener('focus', runEvent);
// When clicked outside element //
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
// 	e.preventDefault();
// 	console.log('EVENT TYPE: ' + e.type);
	
	// console.log(e.target.value);
	// document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
	
	// document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
// }


// // APPLICATION //

// const form = document.getElementById('addForm');
// const itemList = document.getElementById('items');
// const filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
// 	e.preventDefault();
	
// 	// Get input value
// 	const newItem = document.getElementById('itemInput').value;
	
// 	// Create new li element
// 	const li = document.createElement('li');
// 	//Add class
// 	li.className = 'list-group-item';
// 	// Add text node with input value
// 	li.appendChild(document.createTextNode(newItem));
	
// 	// Create delete button element
// 	var delBtn = document.createElement('button');
// 	// Add classes to delete button
// 	delBtn.className = 'btn btn-danger btn-sm float-right delete';
// 	// Append a text node
// 	delBtn.appendChild(document.createTextNode('X'));
	
// 	// Append button to li
// 	li.appendChild(delBtn);
// 	// Append li to list
// 	itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e) {
// 	if (e.target.classList.contains('delete')){
// 		if(confirm('Are you sure?')){
// 			const li = e.target.parentElement;
// 			itemList.removeChild(li);
// 		}
// 	}
// }

// Filter items

function filterItems(e){
	// convert text to lowercase
	const text = e.target.value.toLowerCase();
	// Get list items
	const items = itemList.getElementsByTagName('li');
	// Convert to array
	Array.from(items).forEach(function (item) {
		const itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}