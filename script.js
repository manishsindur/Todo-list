window.addEventListener("load", () => {
	const enterButton = document.getElementById("input-button");
	const todoList = document.getElementById("todo-list");
	const firstSubHeadingtext = document.getElementById("first-sub-heading");

	enterButton.addEventListener("click", () => {
		const userInput = document.querySelector("input").value;
		/*
		? What does the if arg does.
      - Before creating and appending the firstSubHeading, it checks if a h2 element already exists within firstSubHeadingtext. If it does, it won't create a new one.
		 */
		if (!firstSubHeadingtext.querySelector("h2")) {
			const firstSubHeading = document.createElement("h2");
			firstSubHeading.textContent = "Task to do";
			firstSubHeading.style.marginTop = "16px";
			firstSubHeading.style.color = "#FFFFFF";
			firstSubHeadingtext.appendChild(firstSubHeading);
		}

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
	});
});
