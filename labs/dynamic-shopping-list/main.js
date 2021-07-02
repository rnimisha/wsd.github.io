let add=document.getElementById("addItem");
let item=document.getElementById("items");

function addmoreitem(){
	let text=document.getElementById("listname").value;
	let listtext=document.createTextNode(text);
	let list=document.createElement("li");

	//deleting button
	let delbtn=document.createElement("button");
	delbtn.textContent="Delete";

	//new item with delete button
	item.appendChild(list);
	list.appendChild(listtext);
	list.appendChild(delbtn);

	//delete item
	delbtn.onclick=function()
	{
		item.removeChild(list);
	}
}

//add more data on click by executing function
if(add){
  add.addEventListener("click", addmoreitem, false);
}

