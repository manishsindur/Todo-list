window.addEventListener("load", () => {
	const enterButton = document.getElementById("input-button");
	const todoList = document.getElementById("todo-list");
	const taskNumbers = document.getElementById("task-numbers");
	let taskCount = 0;

	enterButton.addEventListener("click", () => {
		const userInput = document.querySelector("input").value;

		if (userInput !== "") {
			const listItems = document.createElement("li");
			listItems.textContent = userInput;
			listItems.style.color = "#9E78CF";
			listItems.style.fontSize = "16px";
			listItems.style.backgroundColor = "#15101C";
			listItems.style.width = "430px";
			listItems.style.height = "75px";
			listItems.style.borderRadius = "10px";
			listItems.style.marginTop = "16px";
			listItems.style.display = "flex";
			listItems.style.justifyContent = "space-between";
			listItems.style.alignItems = "center";
			listItems.style.padding = "20px";

			const icons = document.createElement("img");
			icons.src = "Images/done.svg";
			icons.style.width = "30px";
			icons.style.height = "30px";

			listItems.appendChild(icons);
			todoList.appendChild(listItems);

			taskCount++;
		} else {
			alert("Please enter your task");
		}

		if (todoList.childNodes.length > 0) {
			taskNumbers.textContent = taskCount;
		} else {
			console.log("User input is empty");
		}
	});
});
