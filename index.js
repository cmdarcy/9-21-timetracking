const buttons = document
	.querySelector(".button-container")
	.querySelectorAll("p");

const dailyElements = document.querySelectorAll("[data-daily]");
const weeklyElements = document.querySelectorAll("[data-weekly]");
const monthlyElements = document.querySelectorAll("[data-monthly]");

function show(elementList) {
	elementList.forEach((element) => {
		element.removeAttribute("hidden");
	});
}

function hide(elementList) {
	elementList.forEach((element) => {
		element.setAttribute("hidden", "");
	});
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.innerText === "Daily") {
			show(dailyElements);
			hide(weeklyElements);
			hide(monthlyElements);
		} else if (button.innerText === "Weekly") {
			show(weeklyElements);
			hide(dailyElements);
			hide(monthlyElements);
		} else {
			show(monthlyElements);
			hide(weeklyElements);
			hide(dailyElements);
		}
	});
});
