
const text = document.querySelector("input");
const button = document.querySelector(".btn");
const list = document.querySelector("ul");
const empty = document.querySelector(".empty");


button.addEventListener("click", (x) => {
    x.preventDefault();

    const input = text.value;

    const tasks = text.value;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (tasks == '') {
        alert("Introduza tarea");
        return false;
    } else {
        const checkbox = document.createElement("input");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = input;
        checkbox.type = "checkbox";
        checkbox.classList = "checked";

        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(AddDeleteBtn());
        list.appendChild(li);
    }

    text.value = "";
    empty.style.display = "none";

});

function AddDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (y) => {
        const item = y.target.parentElement;
        list.removeChild(item);

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;
}
