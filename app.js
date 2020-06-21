const list = document.querySelector('.container-list');
const filtersCounter = document.querySelector('.filters p span');
const filters = document.querySelector('.filters');
let done = false;
let todoCount = 0;

// edit
// console.log(list.lastChild.children[2])
// delete
// console.log(list.lastChild.children[3])

list.children[1].addEventListener('keydown', (e) => {
    // Create div .list contains an input checkbox, the value of the input and icons : delete and edit
    if (e.key === 'Enter') {
        // Doesn't create divs when there is only spaces
        // if (list.children[1].value == '') {
        //     return;
        // }

        const listAdded = document.createElement('div');
        listAdded.innerHTML = "<input type='checkbox'>" + '<span id="listContent" contenteditable="true">' + list.children[1].value + '</span>' + '<i class="fas fa-edit"></i>' + '<i class="fas fa-trash"></i>';
        listAdded.classList.add('list');
        list.appendChild(listAdded);

        // Clear the value of input text
        list.children[1].value = '';

        // Count the task left when it is created
        todoCount++;
        filtersCounter.innerHTML = todoCount;

        // When the task is done : click on the checkbox
        listAdded.addEventListener('change', () => {
            if (listAdded.classList.contains('strikethrough')) {
                listAdded.classList.remove('strikethrough');

                done = false;

                todoCount++;
                filtersCounter.innerHTML = todoCount;
            } else {
                listAdded.classList.add('strikethrough');

                done = true;

                todoCount--;
                filtersCounter.innerHTML = todoCount;
            }
        });

        const icons = document.querySelectorAll('.container-list i');

        // Buttons on list created (edit, delete)
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                // Delete button
                if (icon.className === 'fas fa-trash') {
                    icon.parentElement.remove();
                }
            });
        });
    };
});