const list = document.querySelector('.container-list');
const filtersCounter = document.querySelector('.filters p span');
const filters = document.querySelector('.filters');
let todoCount = 0;

const listArray = [
    {
        id: 1,
        done: false,
        content: ' ',
    },
]

list.children[1].addEventListener('keydown', (e) => {
    // Create div .list contains an input checkbox, the value of the input and icon : delete
    if (e.key === 'Enter') {

        // TODO : Doesn't create divs when there is only spaces

        // Doesn't create divs if there is no character
        if (list.children[1].value.length === 0) {
            return;
        }

        const listAdded = document.createElement('div');
        listAdded.innerHTML = "<input type='checkbox'>" + "<input type='text' class='listContent' value=" + list.children[1].value + ">" + '<i class="fas fa-trash"></i>';
        listAdded.classList.add('list');
        list.appendChild(listAdded);

        // Clear the value of input text
        list.children[1].value = '';

        // Count the task left when it is created
        todoCount++;
        filtersCounter.innerHTML = todoCount;

        // When the task is done : click on the checkbox

        const contentListInput = list.lastChild.children[1];

        list.lastChild.firstChild.addEventListener('change', () => {
            if (contentListInput.classList.contains('strikethrough')) {
                contentListInput.classList.remove('strikethrough');

                todoCount++;
                filtersCounter.innerHTML = todoCount;
            } else {
                contentListInput.classList.add('strikethrough');

                todoCount--;
                filtersCounter.innerHTML = todoCount;
            }
        });

        // Edit the value of list

        // contentListInput.addEventListener('keydown', () => {
        //     if (e.key === 'Enter') {

        //     }
        // });

        // Delete list

        const icons = document.querySelectorAll('i');
        
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                if (icon.className === 'fas fa-trash') {
                    icon.parentElement.remove();
                    // Inner html filtersCounter = last id listArray
                }
            });
        });
    };
});